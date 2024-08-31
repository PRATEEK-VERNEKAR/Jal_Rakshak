import React from 'react';
import { Star, Activity } from 'lucide-react';


const QuoteAndProfile = () => {
  // This would typically come from props or a data fetch
  const user = {
    name: "Prateek M Vernekar",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPJ9cm0-r5p50py0yUzvM5ZtEB-xWoJRPRA&s",
    posts: 127,
    rating: 4.8
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col">
      {/* Quote Section */}
      <div className="flex-1  p-6 flex flex-col justify-center">
        {/* <h2 className="text-2xl font-bold mb-4 text-blue-800">Quote of the Day</h2>
        <blockquote className="text-lg italic text-blue-600">
          "Water is the driving force of all nature. Every drop counts in our fight for conservation. Let's pledge to use it wisely, recycle it diligently, and protect it fiercely. For in saving water, we save life itself. Our future depends on the choices we make today about this precious resource."
        </blockquote> */}
        <h1 class="align-center text-8xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 drop-shadow-md ">
          JAL RAKSHAK
        </h1>
      </div>

      {/* Profile Section */}
      <div className="flex-1  p-8 flex flex-col items-center justify-center text-white rounded-lg shadow-xl">
    <div className="relative mb-6">
      <img 
        src={user.avatar} 
        alt={user.name} 
        className="w-40 h-40 rounded-full border-4 border-blue-400 shadow-lg"
      />
      <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-2">
        <Activity size={24} />
      </div>
    </div>
    <h3 className="text-2xl font-bold mb-4">{user.name}</h3>
    <div className="flex space-x-8 mb-6">
      <div className="text-center bg-gray-800 px-4 py-2 rounded-lg">
        <p className="font-bold text-2xl">{user.posts}</p>
        <p className="text-sm text-gray-400">Posts</p>
      </div>
      <div className="text-center bg-gray-800 px-4 py-2 rounded-lg">
        <p className="font-bold text-2xl flex items-center justify-center">
          {user.rating}
          <Star size={16} className="ml-1 text-yellow-400" fill="currentColor" />
        </p>
        <p className="text-sm text-gray-400">Rating</p>
      </div>
    </div>
    <div className="w-full max-w-md">
      <h4 className="text-lg font-semibold mb-2">Impressions</h4>
      <div className="bg-gray-700 rounded-full h-4 w-full overflow-hidden">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full"
          style={{ width: `${user.impressions}%` }}
        ></div>
      </div>
      <p className="text-right text-sm text-gray-400 mt-1">{user.impressions}% positive</p>
    </div>
  </div>
    </div>
  );
};

export default QuoteAndProfile;