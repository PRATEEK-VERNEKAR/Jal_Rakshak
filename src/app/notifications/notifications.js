// app/notifications/page.js
import React from 'react';

const notifications = [
  {
    id: 1,
    sender: "Suraj Kamath",
    message: "Please Join our Group -> Agriculture Water Conservation",
    timestamp: "2023-08-31T14:30:00Z",
  },
  {
    id: 2,
    sender: "Rakesh Verma",
    message: "Please let me in your group -> Climate Change",
    timestamp: "2023-08-31T10:15:00Z",
  },
  {
    id: 3,
    sender: "Harish Raj",
    message: "Please share more details on the implementaiton of the project",
    timestamp: "2023-08-30T18:45:00Z",
  },
];

const NotificationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li key={notification.id} className="bg-gray-800 rounded-lg p-4 shadow-md">
            <div className="flex justify-between items-start">
              <span className="font-semibold text-blue-400">{notification.sender}</span>
              <span className="text-sm text-gray-400">
                {new Date(notification.timestamp).toLocaleString()}
              </span>
            </div>
            <p className="mt-2 text-gray-300">{notification.message.slice(0, 50)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPage;