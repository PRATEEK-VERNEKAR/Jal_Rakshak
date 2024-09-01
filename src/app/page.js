'use client'
import Image from "next/image";
import Middle from "./components/Middle";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import useAuthStore from "@/store/Auth";

export default function Home() {
  const { user } = useAuthStore();
  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="flex items-center justify-center border h-screen">
        <Sidebar />
      </div>

      <div className="h-screen overflow-y-auto">
        <Middle />
      </div>

      {user &&
        <div className="flex items-center justify-center border h-screen">
          <Rightbar />
        </div>}
    </div>
  );
}

