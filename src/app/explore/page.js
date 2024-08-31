import ExploreCards from './ExploreCards';

// export default function ExplorePage() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Explore Water Conservation Strategies</h1>
//       <ExploreCards />
//     </div>
//   );
// }

import Image from "next/image";
import Sidebar from "@/app/components/Sidebar";
export default function Home() {
  return (
    <div className="grid grid-cols-3 h-screen">
  <div className="col-span-1 flex items-center justify-center border h-screen">
    <Sidebar />
  </div>
  
  {/* GroupList with 2 grid column widths */}
  <div className="col-span-2 h-screen overflow-y-auto p-2">
    <ExploreCards />
  </div>
    </div>
  );
}

