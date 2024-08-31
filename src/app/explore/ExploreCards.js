import Image from 'next/image';

const strategies = [
  {
    id: 1,
    title: "Rainwater Harvesting",
    content: "Collect and store rainwater for various uses, reducing reliance on municipal water supplies.",
    image: "/images/image1.png",
  },
  {
    id: 2,
    title: "Drought-Resistant Landscaping",
    content: "Use native plants that require less water and maintain a beautiful, sustainable garden.",
    image: "/images/image2.png",
  },
  {
    id: 3,
    title: "Efficient Irrigation Systems",
    content: "Implement smart irrigation systems to minimize water waste and optimize plant health.",
    image: "/images/image3.png",
  },
  {
    id: 4,
    title: "Water-Saving Appliances",
    content: "Install low-flow fixtures and water-efficient appliances to reduce household water consumption.",
    image: "/images/image4.png",
  },
  {
    id: 5,
    title: "Greywater Recycling",
    content: "Reuse water from sinks, showers, and laundry for irrigation and non-potable purposes.",
    image: "/images/image5.png",
  },
  {
    id: 6,
    title: "Education and Awareness",
    content: "Promote water conservation through community education programs and awareness campaigns.",
    image: "/images/image6.png",
  },
];

export default function ExploreCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {strategies.map((strategy) => (
        <div key={strategy.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48">
            <Image
              src={strategy.image}
              alt={strategy.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">{strategy.title}</h2>
            <p className="text-gray-600">{strategy.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
