import React, { useState } from 'react';
import { Mail, Star, Trash2, Phone, ArchiveRestore, Clock, Menu, X, Lock } from 'lucide-react';
import useAdminLogout from '../../hooks/useAdminLogout';

// Mock data for demonstration
const mockMessages = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      subject: "Business Inquiry",
      message: "I'm interested in your enterprise solutions...",
      date: "2024-03-10T10:30:00",
      read: false,
      starred: false,
      deleted: false,
      trashed: false
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@example.com",
      phone: "9876543210",
      subject: "Partnership Opportunity",
      message: "We'd like to discuss a potential partnership...",
      date: "2024-03-09T15:45:00",
      read: true,
      starred: false,
      deleted: false,
      trashed: false
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "5555555555",
      subject: "Technical Support",
      message: "Having issues with the platform...",
      date: "2024-03-09T09:15:00",
      read: true,
      starred: false,
      deleted: false,
      trashed: false
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      phone: "4444444444",
      subject: "Product Feedback",
      message: "Your latest update is great, but I have some suggestions...",
      date: "2024-03-08T18:20:00",
      read: false,
      starred: true,
      deleted: false,
      trashed: false
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david@example.com",
      phone: "3333333333",
      subject: "Feature Request",
      message: "It would be helpful if you could add...",
      date: "2024-03-08T12:45:00",
      read: true,
      starred: false,
      deleted: false,
      trashed: false
    },
    {
      id: 6,
      name: "Emily Johnson",
      email: "emily@example.com",
      phone: "2222222222",
      subject: "Bug Report",
      message: "I've encountered a bug when trying to...",
      date: "2024-03-07T22:10:00",
      read: false,
      starred: false,
      deleted: false,
      trashed: false
    },
    {
      id: 7,
      name: "Robert White",
      email: "robert@example.com",
      phone: "1111111111",
      subject: "Collaboration Proposal",
      message: "We are looking to collaborate on a project...",
      date: "2024-03-07T14:30:00",
      read: true,
      starred: true,
      deleted: false,
      trashed: false
    },
    {
      id: 8,
      name: "Sophia Martinez",
      email: "sophia@example.com",
      phone: "0987654321",
      subject: "General Inquiry",
      message: "Can you provide more details about...",
      date: "2024-03-07T09:50:00",
      read: false,
      starred: false,
      deleted: false,
      trashed: false
    },
    {
      id: 9,
      name: "James Anderson",
      email: "james@example.com",
      phone: "0123456789",
      subject: "Customer Support",
      message: "I need assistance with my account...",
      date: "2024-03-06T20:15:00",
      read: true,
      starred: false,
      deleted: false,
      trashed: false
    },
    {
      id: 10,
      name: "Olivia Taylor",
      email: "olivia@example.com",
      phone: "9876543210",
      subject: "Subscription Inquiry",
      message: "What are the benefits of your premium plan?",
      date: "2024-03-06T11:00:00",
      read: false,
      starred: false,
      deleted: false,
      trashed: false
    },
    {
      id: 11,
      name: "Daniel Lee",
      email: "daniel@example.com",
      phone: "1234567890",
      subject: "Security Concern",
      message: "I noticed unusual activity on my account...",
      date: "2024-03-05T16:40:00",
      read: true,
      starred: true,
      deleted: false,
      trashed: false
    },
    {
      id: 12,
      name: "Jessica Brown",
      email: "jessica@example.com",
      phone: "0987654321",
      subject: "Refund Request",
      message: "I'd like to request a refund for...",
      date: "2024-03-05T08:25:00",
      read: false,
      starred: false,
      deleted: false,
      trashed: false
    },
    {
      id: 13,
      name: "William Harris",
      email: "william@example.com",
      phone: "0123456789",
      subject: "Hiring Inquiry",
      message: "Are you currently hiring for any roles?",
      date: "2024-03-04T19:55:00",
      read: true,
      starred: false,
      deleted: false,
      trashed: false
    },
    {
      id: 14,
      name: "Ava Clark",
      email: "ava@example.com",
      phone: "9876543210",
      subject: "Community Event",
      message: "We'd love to invite your team to our upcoming event...",
      date: "2024-03-04T13:15:00",
      read: false,
      starred: true,
      deleted: false,
      trashed: false
    },
    {
      id: 15,
      name: "Henry Scott",
      email: "henry@example.com",
      phone: "1234567890",
      subject: "Marketing Collaboration",
      message: "We have an exciting marketing opportunity...",
      date: "2024-03-03T10:05:00",
      read: true,
      starred: false,
      deleted: false,
      trashed: false
    }
];
  

function AdminDashboard({ onLogout }) {
  const { logout, loading, error } = useAdminLogout();
  const [messages, setMessages] = useState(mockMessages);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Inbox");


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };


  const toggleStar = (id) => {
    setMessages((prevMessages) => {
    const updatedMessages = prevMessages.map(msg =>
        msg.id === id ? { ...msg, starred: !msg.starred } : msg
    );
    if (selectedMessage?.id === id) {
      setSelectedMessage(updatedMessages.find(msg => msg.id === id));
    }

    return updatedMessages;
    });
  };

  const markAsRead = (id) => {
    setMessages(messages.map(msg =>
      msg.id === id ? { ...msg, read: true } : msg
    ));
  };

  const trashedMessage = (id) => {
    setMessages(messages.map(msg =>
      msg.id === id ? { ...msg, trashed: true, starred: false } : msg
    ));
    setSelectedMessage(null);
  };

  const deletedMessage = (id) => {
    setMessages(messages.map(msg =>
      msg.id === id ? { ...msg, deleted: true, trashed: false, starred: false } : msg
    ));
    setSelectedMessage(null);
  };
  
  const restoreMessage = (id) => {
    setMessages(messages.map(msg =>
      msg.id === id ? { ...msg, trashed: false } : msg
    ));
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
                  {messages.length > 0 ? (
                    <span className="ml-auto bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full text-sm">
                      {messages.filter((m) => !m.read).length}
                    </span>
                  ) : (
                    ""
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
                  <span className="ml-auto bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full text-sm">
                    {messages.filter((m) => m.starred).length}
                  </span>
                </button>
                <button
                  onClick={() => (setSelectedSection("Trash"), setIsMobileMenuOpen(false))}
                  className={`flex items-center space-x-3 w-full p-2 rounded-lg ${
                    selectedSection === "Trash"
                      ? "bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  <Trash2 className="w-5 h-5" />
                  <span>Trash</span>
                  <span className="ml-auto bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 px-2 py-0.5 rounded-full text-sm">
                    {messages.filter((m) => m.trashed).length}
                  </span>
                </button>
              </nav>
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        {sidebarOpen && (
          <aside className="hidden md:block w-64 bg-white dark:bg-gray-800 h-[calc(100vh-64px)] shadow-sm">
            <nav className="p-4 space-y-2">
              <button
                onClick={() => setSelectedSection("Inbox")}
                className={`flex items-center space-x-3 w-full p-2 rounded-lg ${
                  selectedSection === "Inbox"
                    ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                <Mail className="w-5 h-5" />
                <span>Inbox</span>
                {messages.filter((m) => !m.read).length > 0 && (
                  <span className="ml-auto bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full text-sm">
                    {messages.filter((m) => !m.read).length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setSelectedSection("Starred")}
                className={`flex items-center space-x-3 w-full p-2 rounded-lg ${
                  selectedSection === "Starred"
                    ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                <Star className="w-5 h-5" />
                <span>Starred</span>
                {messages.filter((m) => m.starred).length > 0 && (
                  <span className="ml-auto bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full text-sm">
                    {messages.filter((m) => m.starred).length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setSelectedSection("Trash")}
                className={`flex items-center space-x-3 w-full p-2 rounded-lg ${
                  selectedSection === "Trash"
                    ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                <Trash2 className="w-5 h-5" />
                <span>Trash</span>
                {messages.filter((m) => m.trashed).length > 0 && (
                  <span className="ml-auto bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 px-2 py-0.5 rounded-full text-sm">
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
                    markAsRead(message.id);
                  }}
                  className={`p-4 border-b dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
                    selectedMessage?.id === message.id
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
                          toggleStar(message.id);
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
                        {formatDate(message.date)}
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
                    <span>{selectedMessage.email}〉</span>
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
                        onClick={() => toggleStar(selectedMessage.id)}
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
                        onClick={() => trashedMessage(selectedMessage.id)}
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
                          restoreMessage(selectedMessage.id),
                            setSelectedMessage(null);
                        }}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400"
                      >
                        <ArchiveRestore className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => deletedMessage(selectedMessage.id)}
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
                <span>{formatDate(selectedMessage.date)}</span>
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