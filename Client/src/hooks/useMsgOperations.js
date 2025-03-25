import { useState } from "react";
import axios from "axios";

// Function to mark a message as read
export const markAsRead = async (messageId) => {
    try {
        console.log("API Call - Marking as read for message ID:", messageId);

        const response = await axios.put(
            `/api/client/inquiries/read/${messageId}`,
            { read: true },
            { withCredentials: true }
        );

        return response.data;
    } catch (err) {
        console.error("Error updating message read status:", err);
        throw err;
    }
};

// Function to mark a message as trashed
export const markAsTrashed = async (messageId) => {
    try {

        const response = await axios.patch(
            `/api/client/inquiries/trash/${messageId}`,
            { trashed: true, starred: false },
            { withCredentials: true }
        );

        return response.data;
    } catch (error) {
        console.error("Error marking as trashed:", error);
        throw error;
    }
};

// Function to restore a trashed message
export const restoreMessage = async (messageId) => {
    try {

        const response = await axios.patch(
            `/api/client/inquiries/restore/${messageId}`,
            {}, // No body needed, just toggling `trashed`
            { withCredentials: true }
        );

        return response.data;
    } catch (error) {
        console.error("Error restoring message:", error);
        throw error;
    }
};

// Function to toggle starred status
export const toggleStar = async (messageId, currentStarredStatus) => {
    try {

        const response = await axios.patch(
            `/api/client/inquiries/star/${messageId}`,
            { starred: !currentStarredStatus }, // Toggle the starred status
            { withCredentials: true }
        );

        return response.data;
    } catch (error) {
        console.error("Error toggling star:", error);
        throw error;
    }
};

export const deleteMessage = async (messageId) => {
    try {

        const response = await axios.delete(
            `/api/client/inquiries/delete/${messageId}`,
            { withCredentials: true }
        );

        return response.data;
    } catch (error) {
        console.error("Error deleting message:", error);
        throw error;
    }
};

// Hook for message operations
const useMsgOperations = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleMarkAsRead = async (messageId) => {
        try {
            setLoading(true);
            const updatedMessage = await markAsRead(messageId);
            return updatedMessage;
        } catch (err) {
            setError(err.message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const handleMarkAsTrashed = async (messageId) => {
        try {
            setLoading(true);
            const updatedMessage = await markAsTrashed(messageId);
            return updatedMessage;
        } catch (err) {
            setError(err.message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const handleRestoreMessage = async (messageId) => {
        try {
            setLoading(true);
            const updatedMessage = await restoreMessage(messageId);
            return updatedMessage;
        } catch (err) {
            setError(err.message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const handleToggleStar = async (messageId, isStarred) => {
        try {
            setLoading(true);
            const updatedMessage = await toggleStar(messageId, isStarred);
            return updatedMessage;
        } catch (err) {
            setError(err.message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteMessage = async (messageId) => {
        try {
            setLoading(true);
            await deleteMessage(messageId);
            return true; 
        } catch (err) {
            setError(err.message);
            return false; 
        } finally {
            setLoading(false);
        }
    };

    return {
        markAsRead: handleMarkAsRead,
        markAsTrashed: handleMarkAsTrashed,
        restoreMessage: handleRestoreMessage,
        toggleStar: handleToggleStar,
        deleteMessage: handleDeleteMessage,
        loading,
        error,
    };
};

export default useMsgOperations;
