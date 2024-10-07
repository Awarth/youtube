import { authMiddleware } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import {
  getVideos,
  publishAVideo,
  getAVideoById,
  updateVideo,
  deleteAVideo,
  toggleIsPublished,
} from "../controllers/video.controller.js";
import { Router } from "express";

const router = Router();

router.use(authMiddleware);

router
  .route("/")
  .get(getVideos)
  .post(
    upload.fields([
      {
        name: "videoFile",
        maxCount: 1,
      },
      {
        name: "thumbnail",
        maxCount: 1,
      },
    ]),
    publishAVideo
  );

router
  .route("/:videoId")
  .get(getAVideoById)
  .patch(upload.single("thumbnail"), updateVideo)
  .delete(deleteAVideo);

router.route("/toggle/publish/:videoId").patch(toggleIsPublished);

export default router;
