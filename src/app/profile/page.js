'use client'
import Image from "next/image";
import Sidebar from "@/app/components/Sidebar";
import UserProfilePage from "./UserProfile";
import { useEffect, useState } from "react";
import useAuthStore from "@/store/Auth";


export default function Home() {
  const { setUser, user } = useAuthStore();
  const [credentials, setCredentials] = useState(user);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const saveDetails = () => {
    setUser(credentials);
  };

  useEffect(() => {
    const modal = document.getElementById("my_modal_1");
    modal.showModal();
  }, []);


  return (
    <div className="grid grid-cols-3 h-screen">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col items-center justify-center">
          <h3 className="font-bold text-lg">Edit Profile</h3>
          <div className="modal-action w-full">
            <form className='flex flex-col items-center justify-center w-full space-y-4' method="dialog">
              <input
                onChange={handleChange}
                value={credentials.name}
                className='border-2 w-full outline-none bg-[#fafafa] border-[#c6c6c6] p-3 px-4 mx-4 rounded-xl'
                placeholder='Enter the name'
                type='text' name='name'
                id='name'
                required
              />
              <input
                onChange={handleChange}
                value={credentials.dateOfBirth}
                className='border-2 w-full outline-none bg-[#fafafa] border-[#c6c6c6] p-3 px-4 mx-4 rounded-xl'
                placeholder='Enter the date of birth'
                type='date' name='dateOfBirth'
                id='dateOfBirth'
                required
              />
              <input
                onChange={handleChange}
                value={credentials.biodata}
                className='border-2 w-full outline-none bg-[#fafafa] border-[#c6c6c6] p-3 px-4 mx-4 rounded-xl'
                placeholder='Enter the biodata'
                type='text' name='biodata'
                id='biodata'
                required
              />
              <button onClick={saveDetails} className='btn btn-active btn-neutral bg-black text-white w-full lg:w-1/2 rounded-xl'>
                <span>Save</span>
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="col-span-1 flex items-center justify-center border h-screen">
        <Sidebar />
      </div>

      {/* GroupList with 2 grid column widths */}
      <div className="col-span-2 h-screen overflow-y-auto">
        <UserProfilePage />
      </div>
    </div>
  );
}

