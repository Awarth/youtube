import { asyncHandler } from "../utility/asyncHandler.js";
import { Video } from "../models/video.model.js";
import { Comment } from "../models/comment.model.js";
import { ApiError } from "../utility/ApiError.js";
import { ApiResponse } from "../utility/ApiResponse.js";
import { Like } from "../models/like.model.js";
import mongoose from "mongoose";

const getVideoComments = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const { page = 1, limit = 10 } = req.query;

  // Check if the video exists
  const videoExists = await Video.exists({ _id: videoId });

  if (!videoExists) {
    throw new ApiError(404, "Video not found");
  }

  // Define the aggregation pipeline
  const commentAggregate = Comment.aggregate([
    {
      $match: { video: new mongoose.Types.ObjectId(videoId) }, // Match comments for the specified video
    },
    {
      $lookup: {
        from: "users",
        localField: "owner",
        foreignField: "_id",
        as: "owner",
        pipeline: [{ $project: { username: 1, fullName: 1, "avatar.url": 1 } }],
      },
    },
    {
      $lookup: {
        from: "likes",
        localField: "_id",
        foreignField: "comment",
        as: "likes",
        pipeline: [{ $project: { likedBy: 1 } }],
      },
    },
    {
      $addFields: {
        likesCount: { $size: "$likes" }, // Count the number of likes
        owner: { $arrayElemAt: ["$owner", 0] }, // Get the first owner element
        isLiked: {
          $in: [new mongoose.Types.ObjectId(req.user?._id), "$likes.likedBy"],
        }, // Check if the current user liked the comment
      },
    },
    {
      $sort: { createdAt: -1 }, // Sort comments by creation date (newest first)
    },
    {
      $project: {
        content: 1,
        createdAt: 1,
        likesCount: 1,
        owner: 1,
        isLiked: 1,
      },
    },
  ]);

  // Pagination options
  const options = {
    page: parseInt(page, 10),
    limit: parseInt(limit, 10),
  };

  // Execute the paginated aggregation query
  const comments = await Comment.aggregatePaginate(commentAggregate, options);

  // Send the response with the fetched comments
  return res
    .status(200)
    .json(new ApiResponse(200, comments, "Comments fetched successfully"));
});

const addComment = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const { content } = req.body;

  if (!content) {
    throw new ApiError(400, "Content not found");
  }

  const videoExists = await Video.exists({ _id: videoId });

  if (!videoExists) {
    throw new ApiError(404, "Video not found");
  }

  const comment = await Comment.create({
    content,
    video: videoId,
    owner: req.user._id,
  });

  if (!comment) {
    throw new ApiError(500, "Failed to add comment try again later");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, comment, "Comment added successfully"));
});

const updatedComment = asyncHandler(async (req, res) => {
  const { commentId } = req.params;
  const { content } = req.body;

  if (!content) {
    throw new ApiError(400, "Content is required");
  }

  const comment = await Comment.findById(commentId);

  if (!comment) {
    throw new ApiError(404, "Comment not found");
  }

  if (comment.owner.toString() !== req.user?._id.toString()) {
    throw new ApiError(403, "You can only update your own comment");
  }

  comment.content = content;
  const updatedComment = await comment.save();

  return res
    .status(200)
    .json(new ApiResponse(200, updatedComment, "Comment updated successfully"));
});

const deleteComment = asyncHandler(async (req, res) => {
  const { commentId } = req.params;

  const comment = await Comment.findById(commentId);

  if (!comment) {
    throw new ApiError(404, "Comment not found");
  }

  if (comment.owner.toString() !== req.user?._id.toString()) {
    throw new ApiError(403, "You can only delete your own comment");
  }

  await comment.deleteOne();

  await Like.deleteMany({
    comment: commentId,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Comment deleted successfully"));
});

export { getVideoComments, addComment, updatedComment, deleteComment };
