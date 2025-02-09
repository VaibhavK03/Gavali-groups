import express from "express";
import { storeClientInquiries, fetchClientInquiries } from "../Controller/clientInquiries.controller.js";

const router = express.Router();

router.post("/inquiries", storeClientInquiries);
router.get("/get-inquiries", fetchClientInquiries);

export default router;