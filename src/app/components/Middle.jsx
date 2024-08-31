"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { ThumbsUp, ThumbsDown, MessageSquare, Share2 } from 'lucide-react';
// import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';


const Feed = () => {
  const [posts, setPosts] = useState([]);
  const router=useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="sticky top-0 bg-white z-10 mb-2">   <div className="relative mx-auto">
      <input
        type="text"
        placeholder="Search"
        className="w-full h-16 pl-14 pr-6 text-lg bg-gradient-to-r from-orange-100 to-orange-200 
                   border-2 border-orange-200 rounded-full 
                   focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent
                   transition-all duration-300 ease-in-out
                   placeholder-orange-600 text-orange-800
                   shadow-md hover:shadow-lg"
      />
      <Search 
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-orange-900
                   transition-all duration-300 ease-in-out
                   group-hover:text-orange-600" 
        size={24} 
      />
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2
                   bg-orange-500 text-white px-4 py-2 rounded-full
                   hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300
                   transition-all duration-300 ease-in-out"
      >
        Search
      </button>
    </div>
      </div>
      
      {/* <div className="space-y-0" onClick={()=>{router.push('/posts?user=1')}}>
        {posts.map((post, index) => (
          <div key={index} className="border-b border-gray-300 p-4">
            <p className="mb-2">{post.content}</p>
            <div className="grid grid-cols-2 gap-2 h-[300px]">
              {post.media.slice(0, 4).map((item, itemIndex) => (
                <div key={itemIndex} className='h-full w-full border-2 border-gray-500 overflow-hidden'>
                  {item.type === 'image' ? (
                    <img src={item.url} alt={`Post ${index} image ${itemIndex}`} className="h-auto max-w-full object-fill rounded-md" />
                  ) : (
                    <video src={item.url} className="w-full h-full object-fill rounded-md" controls />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1">
                  <ThumbsUp size={20} />
                  <span>{223}</span>
                </button>
                <button className="flex items-center space-x-1">
                  <ThumbsDown size={20} />
                  <span>{1}</span>
                </button>
                <button className="flex items-center space-x-1">
                  <MessageSquare size={20} />
                  <span>{12}</span>
                </button>
              </div>
              <button className="flex items-center space-x-1">
                <Share2 size={20} />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
    </div> */}


<div className="space-y-6 bg-gray-100 p-6 cursor-pointer" onClick={() => { router.push('/posts?user=1') }}>
    {posts.map((post, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="border-b border-gray-200 p-6">
          <h1 className='bold text-2xl px-4 py-2 border-b-2 mb-4 bg-cyan-200 shadow-lg shadow-cyan-500/50'>{post.user}</h1>
          <p className="mb-4 text-gray-800 font-medium">{post.content}</p>
          <div className="grid grid-cols-2 gap-4 h-[300px]">
            {post.media.slice(0, 4).map((item, itemIndex) => (
              <div key={itemIndex} className='h-full w-full overflow-hidden rounded-md border-2 border-gray-300 hover:border-blue-500 transition-colors duration-300'>
                {item.type === 'image' ? (
                  <img src={item.url} alt={`Post ${index} image ${itemIndex}`} className="h-full w-full object-cover rounded-md" />
                ) : (
                  <video src={item.url} className="w-full h-full object-cover rounded-md" controls />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">
                <ThumbsUp size={24} />
                <span className="font-semibold">{223}</span>
              </button>
              <button className="flex items-center space-x-2 text-red-600 hover:text-red-800 transition-colors duration-300">
                <ThumbsDown size={24} />
                <span className="font-semibold">{1}</span>
              </button>
              <button className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors duration-300">
                <MessageSquare size={24} />
                <span className="font-semibold">{12}</span>
              </button>
            </div>
            <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors duration-300">
              <Share2 size={24} />
              <span className="font-semibold">Share</span>
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>

    </div>
  );
};

export default Feed;