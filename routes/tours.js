import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "../controllers/tourController.js";

const router = express.Router();

router.post("/", createTour);

router.put("/:id",  updateTour);

router.delete("/:id", deleteTour);

router.get("/:id", getSingleTour);

router.get("/", getAllTour);

router.get("/search/getTourBySearch", getTourBySearch);

router.post("/search/getFeaturedTours", getFeaturedTour);

router.post("/search/getTourCount", getTourCount);

export default router;
