import React, { useEffect, useState } from 'react';
import { Mail, Star, Trash2, Phone, ArchiveRestore, Clock, Menu, X, Lock } from 'lucide-react';
import useAdminLogout from '../../hooks/useAdminLogout';
import useFetchInquiries from '../../hooks/useFetchInquiries';
import {markAsRead, markAsTrashed, toggleStar, restoreMessage, deleteMessage} from "../../hooks/useMsgOperations";  

function AdminDashboard() {
  const { data: inquiries, error, } = useFetchInquiries();
  const { logout, loading } = useAdminLogout();
  useEffect(() => {
    if (inquiries.length > 0) {
      setMessages(inquiries);
    }
  }, [inquiries]);

  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Inbox");


  const formatDate = (inquiries) => {
    const date = new Date(inquiries);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };


  const handleToggleStar = async (messageId, isStarred) => {
    const updatedMessage = await toggleStar(messageId, isStarred);
    if (updatedMessage) {
        setMessages((prevMessages) =>
            prevMessages.map((msg) =>
                msg._id === messageId ? { ...msg, starred: !isStarred } : msg
            )
        );
        setSelectedMessage(null);
    }
  };

  const handleSelectMessage = async (message) => {
    setSelectedMessage(message);
    console.log("message:", message);
    if (!message.read) {
      const updatedMessage = await markAsRead(message._id);

      if (updatedMessage) {
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg._id === message._id ? { ...msg, read: true } : msg
          )
        );
      }
    }
  };
  
  const trashedMessage = async (id) => {
    const updatedMessage = await markAsTrashed(id);
    if (updatedMessage) {
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg._id === id ? { ...msg, trashed: true, starred: false } : msg
        )
      );
      setSelectedMessage(null);
    }
  };

  const handleDelete = async (messageId) => {
    const success = await deleteMessage(messageId);
    if (success) {
        setMessages(messages.filter((msg) => msg._id !== messageId)); // Remove from UI
    }
};
  
  const handleRestoreMessage = async (messageId) => {
    const updatedMessage = await restoreMessage(messageId);
    if (updatedMessage) {
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg._id === messageId ? { ...msg, trashed: false } : msg
        )
      );
      setSelectedMessage(null);
    }
  };
  

  const filteredMessages = messages.filter((msg) => {
    if (selectedSection === "Inbox") return !msg.trashed && !msg.deleted;
    if (selectedSection === "Starred") return msg.starred && !msg.trashed && !msg.deleted;
    if (selectedSection === "Trash") return msg.trashed;
    return true;
  });
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);

    if (!isMobileMenuOpen) {
        setSelectedMessage(null);
        setSidebarOpen(true); // Ensure the sidebar opens when the menu opens
    } else {
        setSidebarOpen(false); // Close the sidebar when the menu closes
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 w-full bg-white dark:bg-gray-800 shadow-sm z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            {/* Desktop Sidebar Toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg hidden md:inline-flex"
            >
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>

            {/* Mobile Sidebar Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>

          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Admin Dashboard
          </h1>

          <div className="flex items-center space-x-2">
            <button
              onClick={logout}
              disabled={loading}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400"
            >
              <Lock className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-[64px] left-0 right-0 bottom-0 bg-white dark:bg-gray-800 z-40 md:hidden overflow-y-auto">
            <div className="p-4">
              <nav className="space-y-2">
                <button
                  onClick={() => (setSelectedSection("Inbox"), setIsMobileMenuOpen(false))}
                  className={`flex items-center space-x-3 w-full p-2 rounded-lg ${
                    selectedSection === "Inbox"
                      ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  <Mail className="w-5 h-5" />
                  <span>Inbox</span>
                  {messages.filter((m) => !m.read).length > 0 && (
                  <span className="ml-auto  dark:bg-blue-900 dark:text-blue-400 px-2 py-0.5 rounded-full text-sm">
                    {messages.filter((m) => !m.read).length}
                  </span>
                )}
                </button>
                <button
                  onClick={() => (setSelectedSection("Starred"), setIsMobileMenuOpen(false))}
                  className={`flex items-center space-x-3 w-full p-2 rounded-lg ${
                    selectedSection === "Starred"
                      ? "bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  <Star className="w-5 h-5" />
                  <span>Starred</span>
                  {messages.filter((m) => m.starred).length > 0 && (
                    <span className="ml-auto dark:bg-yellow-400  dark:text-yellow-900 px-2 py-0.5 rounded-full text-sm">
                    {messages.filter((m) => m.starred).length}
                  </span>
                  )}
                </button>
                <button
                  onClick={() => (setSelectedSection("Trash"), setIsMobileMenuOpen(false))}
                  className={`flex items-center space-x-3 w-full p-2 rounded-lg ${
                    selectedSection === "Trash"
                      ? " dark:bg-gray-700  dark:text-gray-400"
                      : " dark:text-gray-400"
                  }`}
                >
                  <Trash2 className="w-5 h-5" />
                  <span>Trash</span>
                  {messages.filter((m) => m.trashed).length > 0 && (
                    <span className="ml-auto  dark:bg-red-900  dark:text-red-400 px-2 py-0.5 rounded-full text-sm">
                    {messages.filter((m) => m.trashed).length}
                  </span>
                  )}
                </button>
              </nav>
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        {sidebarOpen && (
          <aside className="hidden md:block w-64  dark:bg-gray-800 h-[calc(100vh-64px)] shadow-sm">
            <nav className="p-4 space-y-2">
              <button
                onClick={() => setSelectedSection("Inbox")}
                className={`flex items-center space-x-3 w-full p-2 rounded-lg ${
                  selectedSection === "Inbox"
                    ? " dark:bg-blue-900/50  dark:text-blue-400"
                    : " dark:text-gray-400"
                }`}
              >
                <Mail className="w-5 h-5" />
                <span>Inbox</span>
                {messages.filter((m) => !m.read).length > 0 && (
                  <span className="ml-auto  dark:bg-blue-900 dark:text-blue-400 px-2 py-0.5 rounded-full text-sm">
                    {messages.filter((m) => !m.read).length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setSelectedSection("Starred")}
                className={`flex items-center space-x-3 w-full p-2 rounded-lg ${
                  selectedSection === "Starred"
                    ? " dark:bg-blue-900/50  dark:text-blue-400"
                    : " dark:text-gray-400"
                }`}
              >
                <Star className="w-5 h-5" />
                <span>Starred</span>
                {messages.filter((m) => m.starred).length > 0 && (
                  <span className="ml-auto bg-gray-100 dark:bg-yellow-400  dark:text-yellow-900 px-2 py-0.5 rounded-full text-sm">
                    {messages.filter((m) => m.starred).length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setSelectedSection("Trash")}
                className={`flex items-center space-x-3 w-full p-2 rounded-lg ${
                  selectedSection === "Trash"
                    ? " dark:bg-blue-900/50  dark:text-blue-400"
                    : " dark:text-gray-400"
                }`}
              >
                <Trash2 className="w-5 h-5" />
                <span>Trash</span>
                {messages.filter((m) => m.trashed).length > 0 && (
                  <span className="ml-auto  dark:bg-red-900  dark:text-red-400 px-2 py-0.5 rounded-full text-sm">
                    {messages.filter((m) => m.trashed).length}
                  </span>
                )}
              </button>
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 h-[calc(100vh-64px)] flex">
          {/* Message List - Hidden on mobile when message is selected */}
          <div
            className={`${
              selectedMessage ? "hidden md:block md:w-2/5" : "w-full"
            } border-r dark:border-gray-700 bg-white dark:bg-gray-800 overflow-y-auto flex flex-col`}
          >
            {filteredMessages.length > 0 ? (
              filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => {
                    setSelectedMessage(message);
                    handleSelectMessage(message);
                  }}
                  className={`p-4 border-b dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
                    selectedMessage?.id === message._id
                      ? "bg-blue-50 dark:bg-blue-900/50"
                      : ""
                  } ${
                    !message.read ? "bg-blue-50/30 dark:bg-blue-900/30" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className={`font-medium ${
                        !message.read
                          ? "text-black dark:text-white"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {message.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleStar(message._id, message.starred);
                        }}
                        className="hover:text-yellow-500"
                      >
                        <Star
                          className={`w-4 h-4 ${
                            message.starred
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-400"
                          }`}
                        />
                      </button>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(message.createdAt)}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    {message.subject}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {message.message}
                  </p>
                </div>
              ))
            ) : (
              <div className="flex-1 flex items-center font-bold text-2xl justify-center text-gray-500 dark:text-gray-400 p-6">
                No messages to display
              </div>
            )}
          </div>

          {/* Message Detail */}
          {selectedMessage && (
            <div className="w-full md:w-3/5 bg-white dark:bg-gray-800 p-6 overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {selectedMessage.subject}
                  </h2>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span className="font-medium">{selectedMessage.name}</span>
                    <span>〈{selectedMessage.email}〉</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">{selectedMessage.phone}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedMessage(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  >
                    <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                  {!selectedMessage.trashed && (
                    <>
                      <button
                        onClick= {() => {
                          handleToggleStar(selectedMessage._id, selectedMessage.starred);
                          setSelectedMessage(null);
                        }}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            selectedMessage.starred
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-400"
                          }`}
                        />
                      </button>
                      <button
                        onClick={() => trashedMessage(selectedMessage._id)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </>
                  )}
                  {selectedMessage.trashed && (
                    <>
                      <button
                        onClick={() => {
                          handleRestoreMessage(selectedMessage._id),
                          setSelectedMessage(null);
                        }}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400"
                      >
                        <ArchiveRestore className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => {handleDelete(selectedMessage._id), setSelectedMessage(null);}}
                        
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <Clock className="w-4 h-4" />
                <span>{formatDate(selectedMessage.createdAt)}</span>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {selectedMessage.message}
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;