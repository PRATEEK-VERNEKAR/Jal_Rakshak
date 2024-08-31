import React from 'react';
import Link from 'next/link';
import { Home, Compass, Users, User, FileText, LogOut, PlusCircle,Bell } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Explore', icon: Compass, href: '/explore' },
    { name: 'My Groups', icon: Users, href: '/my_group_list' },
    { name: 'Interests', icon: Users, href: '/interested_groups' },
    { name: 'Profile', icon: User, href: '/profile' },
    { name: 'Your Posts', icon: FileText, href: '/your-posts' },
    { name: 'Notifications', icon: Bell, href: '/notifications' },
    { name: 'Logout', icon: LogOut, href: '/logout' },
  ];

  return (
    <div className="w-full h-full bg-gray-900 text-white p-4 flex flex-col justify-between">
      <nav className='relative top-[100px] right-[-350px] w-[40%]'>
        <ul className="space-y-9 text-xl ">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="flex justify-start space-x-6 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                <item.icon className="w-6 h-6" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href='/upload_post' className=" relative right-[-300px] w-[50%] bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200">
        <PlusCircle className="w-6 h-6" />
        <span>Post</span>
      </Link>
    </div>
  );
};

export default Sidebar;