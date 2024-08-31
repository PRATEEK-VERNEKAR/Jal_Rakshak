import { BookOpen, Video, FileText } from 'lucide-react';


export default function Article(){
    
    return(
        <div className="bg-white text-gray-900 min-h-screen p-4 md:p-8">
        <header className="mb-8 flex justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Drip Irrigation to Save Water in Agriculture</h1>
            <p className="text-gray-600">From Wikipedia, the free encyclopedia</p>
          </div>

          <div className="flex items-center space-x-4 mt-4">
          
            <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Follow Group</button>
            <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Join Group</button>
          </div>

        </header>
  
        <nav className="mb-6">
          <ul className="flex space-x-4 text-blue-500">
            <li><a href="#introduction" className="hover:underline">Introduction</a></li>
            <li><a href="#history" className="hover:underline">History</a></li>
            <li><a href="#benefits" className="hover:underline">Benefits</a></li>
            <li><a href="#implementation" className="hover:underline">Implementation</a></li>
            <li><a href="#media" className="hover:underline">Media</a></li>
          </ul>
        </nav>
  
        <main className="space-y-6">
          <section id="introduction">
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <p>
              Drip irrigation is a micro-irrigation system that has the potential to save water and nutrients by allowing water to drip slowly to the roots of plants, either from above the soil surface or buried below the surface. The goal is to place water directly into the root zone and minimize evaporation.
            </p>
          </section>
  
          <section id="history">
            <h2 className="text-2xl font-semibold mb-2">History</h2>
            <p>
              Modern drip irrigation began its development in Afghanistan in 1866 when researchers began experimenting with irrigation using clay pipe to create combination irrigation and drainage systems. In the 1920s, O.E. Robey experimented with irrigating through porous canvas hose at Michigan State University.
            </p>
          </section>
  
          <section id="benefits">
            <h2 className="text-2xl font-semibold mb-2">Benefits</h2>
            <ul className="list-disc pl-5">
              <li>Water conservation</li>
              <li>Improved crop yield</li>
              <li>Reduced fertilizer and nutrient loss</li>
              <li>Less soil erosion</li>
              <li>Prevents weed growth</li>
            </ul>
          </section>
  
          <section id="implementation">
            <h2 className="text-2xl font-semibold mb-2">Implementation</h2>
            <p>
              Implementing a drip irrigation system involves several components including pumps, valves, filters, pipes, and emitters. The system can be customized based on crop type, soil conditions, and field size. Regular maintenance and monitoring are crucial for optimal performance.
            </p>
          </section>
  
          <section id="media" className="space-y-4">
            <h2 className="text-2xl font-semibold mb-2">Media</h2>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <BookOpen className="mr-2" /> Images
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Button_dripper.JPG" alt="Drip irrigation system in a field" className="w-full h-auto rounded-lg shadow-md" />
                <img src="https://t3.ftcdn.net/jpg/04/26/36/04/360_F_426360432_3l6hp8dQDqHPR67JWIqfDJjTZTQSshwm.jpg" alt="Close-up of drip emitter" className="w-full h-auto rounded-lg shadow-md" />
              </div>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Video className="mr-2" /> Videos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <video src="/api/placeholder/400/300" controls className="w-full h-auto rounded-lg shadow-md">
                  Your browser does not support the video tag.
                </video>
                <video src="/api/placeholder/400/300" controls className="w-full h-auto rounded-lg shadow-md">
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <FileText className="mr-2" /> PDFs
              </h3>
              <ul className="list-disc pl-5">
                <li><a href="#" className="text-blue-500 hover:underline">Drip Irrigation Design Guide</a></li>
                <li><a href="#" className="text-blue-500 hover:underline">Water Saving Techniques in Agriculture</a></li>
              </ul>
            </div>
          </section>
        </main>
  
        <footer className="mt-8 text-center text-gray-600">
          <p>This page was last edited on 31 August 2024, at 15:30 (UTC).</p>
        </footer>
      </div>
    )
}