import React from 'react';
import { Calendar, Mail, User, Droplet, Users, MessageCircle } from 'lucide-react';
import useAuthStore from '@/store/Auth';

const dummyPosts = [
  { id: 1, title: "10 Easy Ways to Save Water at Home", excerpt: "Simple lifestyle changes that can significantly reduce your water footprint." },
  { id: 2, title: "The Impact of Climate Change on Water Resources", excerpt: "Exploring the relationship between global warming and water scarcity." },
  { id: 3, title: "Innovative Technologies in Water Conservation", excerpt: "A look at cutting-edge solutions for efficient water use in agriculture and industry." },
  { id: 4, title: "Community-Led Water Conservation Projects", excerpt: "Success stories of local initiatives making a big impact on water preservation." }
];

const dummyGroups = [
  { id: 1, name: "Global Water Partnership", memberCount: 12500 },
  { id: 2, name: "Rainwater Harvesting Enthusiasts", memberCount: 7800 },
  { id: 3, name: "Sustainable Irrigation Techniques", memberCount: 5600 },
  { id: 4, name: "Water Policy Advocates", memberCount: 9200 }
];

const UserProfilePage = () => {
  const { user } = useAuthStore();

  const dummyUser = {
    fullName: user.name,
    dateOfBirth: user.dateOfBirth, // World Water Day
    email: user.email,
    username: "@aquasaver",
    biodata: user.biodata,
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPJ9cm0-r5p50py0yUzvM5ZtEB-xWoJRPRA&s",
  };

  return (
    <div className="bg-gray-700 min-h-screen p-4 text-gray-200">
      <div className="max-w-3xl mx-auto bg-gray-900">
        {/* Header */}
        <div className="mb-4">
          <div className="relative">
            <img
              src="banner.png"
              alt="Water Conservation Banner"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <img
              src={dummyUser.avatarUrl}
              alt={dummyUser.fullName}
              className="absolute bottom-0 left-4 transform translate-y-1/2 w-32 h-32 rounded-full border-4 border-gray-900"
            />
          </div>
          <div className="mt-16 px-4">
            <h1 className="text-2xl font-bold">{dummyUser.fullName}</h1>
            <p className="text-gray-400">{dummyUser.username}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-4 px-4">
          <p className="text-gray-300">{dummyUser.biodata}</p>
        </div>

        {/* User Info */}
        <div className="mb-4 px-4 flex flex-wrap">
          <div className="mr-4 mb-2 flex items-center">
            <Calendar className="mr-2" size={16} />
            <span className="text-gray-400">Joined {dummyUser.dateOfBirth}</span>
          </div>
          <div className="mr-4 mb-2 flex items-center">
            <Mail className="mr-2" size={16} />
            <span className="text-gray-400">{dummyUser.email}</span>
          </div>
          <div className="mr-4 mb-2 flex items-center">
            <Droplet className="mr-2" size={16} />
            <span className="text-gray-400">1.5M Gallons Saved</span>
          </div>
        </div>

        {/* Posts */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 px-4 flex items-center">
            <MessageCircle className="mr-2" size={24} />
            Posts
          </h2>
          <ul className="space-y-4">
            {dummyPosts.map((post) => (
              <li key={post.id} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-400">{post.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Groups */}
        <div>
          <h2 className="text-xl font-semibold mb-4 px-4 flex items-center">
            <Users className="mr-2" size={24} />
            Groups
          </h2>
          <ul className="space-y-4">
            {dummyGroups.map((group) => (
              <li key={group.id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                <h3 className="font-semibold text-blue-400">{group.name}</h3>
                <p className="text-sm text-gray-400">{group.memberCount.toLocaleString()} members</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;