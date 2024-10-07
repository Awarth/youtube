import { ApiError } from "../utility/ApiError.js";
import { asyncHandler } from "../utility/asyncHandler.js";
import { Tweet } from "../models/tweet.model.js";
import { ApiResponse } from "../utility/ApiResponse.js";
import mongoose from "mongoose";

const createTweet = asyncHandler(async (req, res) => {
  const { content } = req.body;

  if (!content) {
    throw new ApiError(400, "Content is required to create tweet");
  }

  const tweet = await Tweet.create({
    content: content,
    owner: req.user?._id,
  });

  if (!tweet) {
    throw new ApiError(400, "Error while creating tweet");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, tweet, "Tweet created successfully"));
});

const updateTweet = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const { tweetId } = req.params;

  if (!mongoose.isValidObjectId(tweetId)) {
    throw new ApiError(400, "Invalid tweet id");
  }

  const tweet = await Tweet.findById(tweetId);

  if (!tweetId) {
    throw new ApiError(400, "Tweet not found");
  }

  if (tweet.owner.toString() !== req.user._id.toString()) {
    throw new ApiError(400, "You are not authorized to edit the tweet");
  }

  tweet.content = content || tweet.content;
  await tweet.save();

  return res
    .status(200)
    .json(new ApiResponse(200, tweet, "Tweet updated successfully"));
});

const deleteTweet = asyncHandler(async (req, res) => {
  const { tweetId } = req.params;

  if (!mongoose.isValidObjectId(tweetId)) {
    throw new ApiError(400, "Invalid tweet id");
  }

  const tweet = await Tweet.findById(tweetId);

  if (!tweet) {
    throw new ApiError(400, "Tweet not found");
  }

  if (tweet.owner.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not authorized to delete the tweet");
  }

  await tweet.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Tweet deleted successfully"));
});

const getUserTweets = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.isValidObjectId(userId)) {
    throw new ApiError(400, "Invalid user id");
  }

  const tweets = await Tweet.find({ owner: userId }).sort({ createdAt: -1 });

  if (!tweets || tweets.length === 0) {
    throw new ApiError(404, "No tweets found for this user");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, tweets, "All tweets retrieved successfully"));
});

export { createTweet, updateTweet, deleteTweet, getUserTweets };
