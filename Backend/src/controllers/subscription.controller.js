import { ApiError } from "../utility/ApiError.js";
import { ApiResponse } from "../utility/ApiResponse.js";
import { asyncHandler } from "../utility/asyncHandler.js";
import { Subscription } from "../models/subscription.model.js";
import mongoose, { isValidObjectId } from "mongoose";

const getUserChannelSubscribers = asyncHandler(async (req, res) => {
  const { channelId } = req.params; // Change from subscriberId to channelId

  if (!isValidObjectId(channelId)) {
    throw new ApiError(400, "Invalid channel");
  }

  const subscribersAggregate = await Subscription.aggregate([
    {
      $match: { channel: new mongoose.Types.ObjectId(channelId) },
    },
    {
      $lookup: {
        from: "users",
        foreignField: "_id",
        localField: "subscriber",
        as: "subscribers",
        pipeline: [
          {
            $lookup: {
              from: "subscriptions",
              foreignField: "channel",
              localField: "_id",
              as: "subscribedToSubscribers",
            },
          },
          {
            $addFields: {
              subscribedToSubscribers: {
                $in: [
                  new mongoose.Types.ObjectId(channelId),
                  "$subscribedToSubscribers.channel",
                ],
              },
              subscribersCount: { $size: "$subscribedToSubscribers" },
            },
          },
        ],
      },
    },
    {
      $unwind: "$subscribers",
    },
    {
      $project: {
        _id: 0,
        username: "$subscribers.username",
        fullName: "$subscribers.fullName",
        avatar: "$subscribers.avatar",
        subscribedToSubscribers: "$subscribers.subscribedToSubscribers",
        subscribersCount: "$subscribers.subscribersCount",
      },
    },
  ]);

  console.log(subscribersAggregate);

  const totalSubscribers = await Subscription.countDocuments({
    channel: new mongoose.Types.ObjectId(channelId),
  });

  return res.status(200).json({
    statusCode: 200,
    data: {
      subscribers: subscribersAggregate, // Directly return the aggregated subscribers
      totalSubscribers,
    },
    message: "Subscribers fetched successfully",
    success: true,
  });
});

const toggleSubscription = asyncHandler(async (req, res) => {
  const { channelId } = req.params;

  if (!isValidObjectId(channelId)) {
    throw new ApiError(400, "Invalid channel id");
  }

  const subscribed = await Subscription.findOne({
    subscriber: req.user?._id,
    channel: channelId,
  });

  if (subscribed) {
    await Subscription.findByIdAndDelete(subscribed?._id);

    return res
      .status(200)
      .json(
        new ApiResponse(200, { subscribed: false }, "Unsubscribed successfully")
      );
  }

  await Subscription.create({
    subscriber: req.user?._id,
    channel: channelId,
  });

  return res
    .status(200)
    .json(
      new ApiResponse(200, { subscribed: true }, "Subscribed successfully")
    );
});

const getSubscribedChannels = asyncHandler(async (req, res) => {
  const { channelId } = req.params;

  if (!isValidObjectId(channelId)) {
    throw new ApiError(400, "Invalid subscriber ID");
  }

  console.log(channelId);
  

  const subscribedChannels = await Subscription.aggregate([
    {
      $match: {
        subscriber: new mongoose.Types.ObjectId(channelId),
      },
    },
    {
      $lookup: {
        from: "users",
        foreignField: "_id",
        localField: "channel",
        as: "subscribedChannel",
        pipeline: [
          {
            $lookup: {
              from: "videos",
              foreignField: "owner",
              localField: "_id",
              as: "videos",
            },
          },
          {
            $addFields: {
              latestVideo: {
                $ifNull: [
                  {
                    $arrayElemAt: [
                      {
                        $sortArray: {
                          input: "$videos",
                          sortBy: { createdAt: -1 },
                        },
                      },
                      0,
                    ],
                  },
                  null, // Fallback if no videos are found
                ],
              },
            },
          },
        ],
      },
    },
    {
      $unwind: "$subscribedChannel",
    },
    {
      $project: {
        _id: 0,
        subscribedChannel: {
          _id: 1,
          username: 1,
          fullName: 1,
          avatar: 1,
          latestVideo: {
            _id: 1,
            "videoFile.url": 1,
            coverImage: 1,
            owner: 1,
            title: 1,
            description: 1,
            duration: 1,
            createdAt: 1,
            views: 1,
          },
        },
      },
    },
  ]);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        subscribedChannels,
        "Subscribed channel fetched successfully"
      )
    );
});

export { getUserChannelSubscribers, toggleSubscription, getSubscribedChannels };
