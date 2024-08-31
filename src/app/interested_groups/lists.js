import React from 'react';
import { Star, Users, Calendar, DollarSign } from 'lucide-react';

const groups = [
  {
    name: "Aqua Savers",
    idea: "Promoting rainwater harvesting in urban areas",
    members: 1250,
    formed: "2022-03-15",
    rating: 4.7,
    funding: 75000
  },
  {
    name: "Drip Champions",
    idea: "Advocating for drip irrigation in agriculture",
    members: 3000,
    formed: "2021-09-01",
    rating: 4.9,
    funding: 120000
  },
  {
    name: "Blue Planet Guardians",
    idea: "Protecting freshwater ecosystems and biodiversity",
    members: 5500,
    formed: "2020-06-22",
    rating: 4.8,
    funding: 200000
  },
  {
    name: "H2O Heroes",
    idea: "Educating youth about water conservation",
    members: 2200,
    formed: "2023-01-10",
    rating: 4.5,
    funding: 50000
  }
];

const GroupList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">My Interests</h1>
      <div className="space-y-6">
        {groups.map((group, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-center mb-2">{group.name}</h2>
            <p className="text-gray-600 text-center mb-4">{group.idea}</p>
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <div className="flex items-center">
                  <Users className="mr-2 text-blue-500" size={20} />
                  <span>{group.members} members</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 text-green-500" size={20} />
                  <span>Founded {new Date(group.formed).toLocaleDateString()}</span>
                </div>
              </div>
              <div>
                    <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Join Group</button>

                </div>
              <div className="space-y-2 text-right">
                <div className="flex items-center justify-end">
                  <Star className="mr-2 text-yellow-500" size={20} />
                  <span>{group.rating.toFixed(1)} rating</span>
                </div>
                <div className="flex items-center justify-end">
                  <DollarSign className="mr-2 text-green-500" size={20} />
                  <span>${group.funding.toLocaleString()} funded</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupList;