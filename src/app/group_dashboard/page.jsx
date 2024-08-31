import React from 'react';
import { Users, FileText, Send } from 'lucide-react';

const groupData = {
  name: "Sewage Savers",
  idea: "Innovative solutions for sewage water treatment and reuse",
  members: [
    { id: 1, name: "Jane Doe", role: "Environmental Engineer" },
    { id: 2, name: "John Smith", role: "Water Policy Analyst" },
    { id: 3, name: "Emily Chen", role: "Microbiologist" },
    { id: 4, name: "Michael Brown", role: "Civil Engineer" },
  ],
  documents: [
    { id: 1, name: "Sewage Treatment Methods.pdf" },
    { id: 2, name: "Water Reuse Regulations.docx" },
    { id: 3, name: "Microbial Analysis Report.xlsx" },
    { id: 4, name: "Project Proposal.pptx" },
  ],
  chat: [
    { id: 1, user: "Jane Doe", message: "Has anyone reviewed the latest filtration system report?" },
    { id: 2, user: "John Smith", message: "Yes, I've gone through it. The new membrane technology looks promising." },
    { id: 3, user: "Emily Chen", message: "I agree. The microbial reduction rates are impressive." },
    { id: 4, user: "Michael Brown", message: "Great! Let's discuss implementation costs in our next meeting." },
    { id: 5, user: "Jane Doe", message: "Sounds good. I'll prepare a cost analysis by then." },
  ]
};

const GroupDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Dashboard Section (70% width) */}
      <div className="w-[70%] p-6 overflow-auto">

        <div className='flex justify-between'>
          <div>

            <h1 className="text-3xl font-bold mb-4">{groupData.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{groupData.idea}</p>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            
            <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Follow Group</button>
            <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Join Group</button>
          </div>
        </div>
        
        <div className="flex space-x-6">
          {/* Members List */}
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Users className="mr-2" /> Members
            </h2>
            <ul className="bg-white rounded-lg shadow">
              {groupData.members.map(member => (
                <li key={member.id} className="p-4 border-b last:border-b-0">
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Documents */}
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FileText className="mr-2" /> Documents
            </h2>
            <ul className="bg-white rounded-lg shadow">
              {groupData.documents.map(doc => (
                <li key={doc.id} className="p-4 border-b last:border-b-0">
                  <a href="#" className="text-blue-600 hover:underline">{doc.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Group Chat Section (30% width) */}
      <div className="w-[30%] bg-white border-l border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-2xl font-semibold">Group Chat</h2>
        </div>
        <div className="flex-grow overflow-auto p-4">
          {groupData.chat.map(message => (
            <div key={message.id} className="mb-4">
              <p className="font-semibold">{message.user}</p>
              <p className="bg-gray-100 p-2 rounded-lg">{message.message}</p>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDashboard;