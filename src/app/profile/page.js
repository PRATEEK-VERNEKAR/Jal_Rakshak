import Image from "next/image";
import Sidebar from "@/app/components/Sidebar";
import UserProfilePage from "./UserProfile";
export default function Home() {
  return (
    <div className="grid grid-cols-3 h-screen">
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

