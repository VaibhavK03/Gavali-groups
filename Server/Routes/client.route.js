import express from "express";
import { storeClientInquiries, fetchClientInquiries } from "../Controller/clientInquiries.controller.js";
import { readMessage, trashedMessage, starredMessage, restoreMessage, deleteMessage } from "../Controller/messageOperations.controller.js";

const router = express.Router();

router.post("/inquiries", storeClientInquiries);
router.get("/get-inquiries", fetchClientInquiries);
router.put("/inquiries/read/:id",  readMessage);
router.patch("/inquiries/trash/:id",  trashedMessage);
router.patch("/inquiries/star/:id",  starredMessage);
router.patch("/inquiries/restore/:id", restoreMessage);
router.delete("/inquiries/delete/:id",  deleteMessage);

export default router;