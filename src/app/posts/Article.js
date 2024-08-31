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
            Drip irrigation is an efficient and sustainable method of watering crops that delivers water directly to the plant's root zone through a network of tubes, pipes, and emitters. Unlike traditional irrigation methods, which often waste water through evaporation and runoff, drip irrigation minimizes water loss by applying it slowly and precisely where it's needed most. This technique not only conserves water but also reduces weed growth, prevents soil erosion, and enhances nutrient absorption by maintaining optimal soil moisture levels. Drip irrigation is especially beneficial in arid and semi-arid regions where water scarcity is a significant concern, offering a practical solution to support agricultural productivity while preserving vital water resources.
            </p>
          </section>
  
          <section id="history">
            <h2 className="text-2xl font-semibold mb-2">History</h2>
            <p>
            The history of drip irrigation dates back thousands of years, with its earliest forms believed to have been used in ancient agricultural practices. Some of the earliest evidence comes from China and the Middle East, where farmers used clay pots buried in the soil to slowly release water to plant roots, a rudimentary form of controlled irrigation. The modern concept of drip irrigation, however, began to take shape in the mid-20th century.
            </p>
            <p>
            In the 1950s, Simcha Blass, an Israeli water engineer, observed a large tree growing much faster than others around it due to a leak in a nearby water pipe, which provided slow, consistent watering. Inspired by this, Blass developed the first modern drip irrigation system, using polyethylene tubing to deliver water directly to plant roots. This innovation led to the establishment of Netafim, a company that would go on to become a global leader in drip irrigation technology. Over the subsequent decades, drip irrigation systems have evolved, incorporating advanced materials and technologies such as pressure-compensating emitters, filtration systems, and automation, making them more efficient and accessible. Today, drip irrigation is widely used worldwide, particularly in water-scarce regions, revolutionizing agricultural practices and significantly improving water use efficiency.          </p>
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
                <video src="video4.mp4" controls className="w-full h-auto rounded-lg shadow-md">
                  Your browser does not support the video tag.
                </video>
                <video src="video3.mp4" controls className="w-full h-auto rounded-lg shadow-md">
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