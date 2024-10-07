import { Playlist } from "../models/playlist.model.js";
import { ApiError } from "../utility/ApiError.js";
import { ApiResponse } from "../utility/ApiResponse.js";
import mongoose from "mongoose";
import { asyncHandler } from "../utility/asyncHandler.js";

const createPlaylist = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    throw new ApiError("Name and description of the playlist needed");
  }

  const playlist = await Playlist.create({
    name: name,
    description: description,
    owner: req.user?._id,
  });

  if (!playlist) {
    throw new ApiError(401, "Playlist not created");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, playlist, `Playlist created successfully`));
});

const getPlaylistById = asyncHandler(async (req, res) => {
  const playlistId = req.params.playlistId;

  if (!playlistId) {
    throw new ApiError(400, "Playlist id required");
  }

  const playlist = await Playlist.findById(playlistId);

  if (!playlist) {
    throw new ApiError(400, "Playlist not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, playlist, "Playlist retrieved successfully"));
});

const deletePlaylist = asyncHandler(async (req, res) => {
  const playlistId = req.params.playlistId;

  if (!playlistId) {
    throw new ApiError(400, "Provide correct playlist id");
  }

  const playlist = await Playlist.findByIdAndDelete(playlistId);

  if (!playlist) {
    throw new ApiError(404, "Playlist does not exist");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, playlist, "Playlist deleted successfully"));
});

const updatePlaylist = asyncHandler(async (req, res) => {
  const playlistId = req.params.playlistId;

  const { name, description } = req.body;

  if (!name || !description) {
    throw new ApiError(400, "Provide name or description");
  }

  if (!playlistId) {
    throw new ApiError(400, "Provide correct playlist id");
  }

  const playlist = await Playlist.findByIdAndUpdate(
    playlistId,
    { name, description },
    { new: true }
  );

  if (!playlist) {
    throw new ApiError(404, "Playlist does not exist");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, playlist, "Playlist updated successfully"));
});

const getUserPlaylist = asyncHandler(async (req, res) => {
  const userId = req.params.userId;

  if (!userId) {
    throw new ApiError(400, "Provide user ID");
  }

  // Ensure the `userId` is converted to an ObjectId if necessary
  const playlists = await Playlist.aggregate([
    {
      $match: { owner: new mongoose.Types.ObjectId(userId) },
    },
  ]);

  if (!playlists || playlists.length === 0) {
    throw new ApiError(404, "No playlists found for this user");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, playlists, "Playlists retrieved successfully"));
});

const addVideoToPlaylist = asyncHandler(async (req, res) => {
  const { playlistId, videoId } = req.params;

  if (!playlistId || !videoId) {
    throw new ApiError(400, "Playlist and video id required");
  }

  const playlist = await Playlist.findByIdAndUpdate(
    playlistId,
    { $push: { videos: videoId } },
    { new: true }
  );

  if (!playlist) {
    throw new ApiError(400, "Playlist with particular id does not exist");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, playlist, "Video added to the playlist successfully")
    );
});

const removeVideoFromPlaylist = asyncHandler(async (req, res) => {
  const { playlistId, videoId } = req.params;

  if (!playlistId || !videoId) {
    throw new ApiError(400, "Playlist and video id required");
  }

  const playlist = await Playlist.findByIdAndUpdate(
    playlistId,
    { $pull: { videos: videoId } },
    { new: true }
  );

  if (!playlist) {
    throw new ApiError(400, "Playlist with particular does not exist");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, playlist, "Video removed from the playlist"));
});

export {
  createPlaylist,
  getPlaylistById,
  updatePlaylist,
  deletePlaylist,
  getUserPlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
};
