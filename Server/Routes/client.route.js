import express from "express";
import verifyToken from "../Middleware/verifyToken.js";
import { storeClientInquiries, fetchClientInquiries } from "../Controller/clientInquiries.controller.js";

const router = express.Router();

router.post("/inquiries", storeClientInquiries);
router.get("/get-inquiries",verifyToken, fetchClientInquiries);

export default router;