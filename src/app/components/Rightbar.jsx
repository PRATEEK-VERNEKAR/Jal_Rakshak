import React from 'react';

const QuoteAndProfile = () => {
  // This would typically come from props or a data fetch
  const user = {
    name: "Prateek M Vernekar",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPJ9cm0-r5p50py0yUzvM5ZtEB-xWoJRPRA&s",
    posts: 127,
    rating: 4.8
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Quote Section */}
      <div className="flex-1 bg-blue-100 p-6 flex flex-col justify-center">
        {/* <h2 className="text-2xl font-bold mb-4 text-blue-800">Quote of the Day</h2>
        <blockquote className="text-lg italic text-blue-600">
          "Water is the driving force of all nature. Every drop counts in our fight for conservation. Let's pledge to use it wisely, recycle it diligently, and protect it fiercely. For in saving water, we save life itself. Our future depends on the choices we make today about this precious resource."
        </blockquote> */}
        <h1 class="align-center text-8xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 drop-shadow-md ">
          JAL RAKSHAK
        </h1>
      </div>

      {/* Profile Section */}
      <div className="flex-1  bg-gray-900 p-6 flex flex-col items-center justify-center text-white">
        <img 
          src={user.avatar} 
          alt={user.name} 
          className="w-32 h-32 rounded-full border-4 border-white mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
        <div className="flex space-x-4">
          <div className="text-center">
            <p className="font-bold">{user.posts}</p>
            <p className="text-sm">Posts</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{user.rating}</p>
            <p className="text-sm">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteAndProfile;