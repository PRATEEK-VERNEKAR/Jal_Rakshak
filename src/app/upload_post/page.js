"use client";

import React, { useState } from 'react';
import { Plus, Image, Video, FileText, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const PostUploadForm = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [tags,setTags] = useState('');
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileId = Date.now();
    setFiles(prev => [...prev, { id: fileId, file, type: file.type.split('/')[0] }]);

    // Simulating file upload
    setUploadProgress(prev => ({ ...prev, [fileId]: 0 }));
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const newProgress = (prev[fileId] || 0) + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
        }
        return { ...prev, [fileId]: Math.min(newProgress, 100) };
      });
    }, 500);
  };

  const removeFile = (id) => {
    setFiles(prev => prev.filter(file => file.id !== id));
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[id];
      return newProgress;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ title, subtitle, content, files });
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title of Idea</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border-2 border-gray-100   focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div>
          <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">Subtitle of Idea</label>
          <input
            type="text"
            id="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border-2 border-gray-100  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Blog Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm  border-2 border-gray-100 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Add tags</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="text-indigo-600 mt-1 block w-full rounded-md border-gray-300 shadow-sm border-2 border-gray-100  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload Files</label>
          <div className="flex items-center space-x-4">
            <label className="cursor-pointer bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
              <Plus size={24} />
              <input type="file" className="hidden" onChange={handleFileUpload} />
            </label>
            <span className="text-sm text-gray-500">Click to add image, video, or document</span>
          </div>
        </div>

        <div className="space-y-4">
          {files.map(file => (
            <div key={file.id} className="flex items-center space-x-4 bg-gray-100 p-4 rounded-md">
              {file.type === 'image' && <Image size={24} />}
              {file.type === 'video' && <Video size={24} />}
              {file.type === 'application' && <FileText size={24} />}
              <span className="flex-grow">{file.file.name}</span>
              <div className="w-40 bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${uploadProgress[file.id] || 0}%` }}
                ></div>
              </div>
              <button onClick={() => removeFile(file.id)} className="text-red-500 hover:text-red-700">
                <X size={20} />
              </button>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Post
        </button>
      </form>

      {showSuccessMessage && (
        <Alert className="mt-4">
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>Your post has been uploaded successfully!</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default PostUploadForm;