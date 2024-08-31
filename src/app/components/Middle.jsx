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
      <div className="sticky top-0 bg-white z-10 mb-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className=" bg-orange-100	 w-full h-[80px] pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />

        </div>
      </div>
      
      <div className="space-y-0" onClick={()=>{router.push('/posts?user=1')}}>
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
    </div>
    </div>
  );
};

export default Feed;