// PhotographerCard.js
import { Heart, MapPin, Star } from "lucide-react";

const PhotographerCard = ({ photographer, onViewProfile }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="relative">
      <img
        src={photographer.profilePic}
        alt={photographer.name}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-2 right-2">
        <Heart className="w-6 h-6 text-white hover:text-red-500 cursor-pointer" />
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        {photographer.name}
      </h3>
      <div className="flex items-center text-gray-600 mb-2">
        <MapPin className="w-4 h-4 mr-1" />
        <span className="text-sm">{photographer.location}</span>
      </div>
      <div className="flex items-center mb-2">
        <Star className="w-4 h-4 text-yellow-400 fill-current" />
        <span className="text-sm text-gray-600 ml-1">
          {photographer.rating}
        </span>
        <span className="text-lg font-bold text-gray-800 ml-auto">
          ₹{photographer.price.toLocaleString()}
        </span>
      </div>
      <div className="flex flex-wrap gap-1 mb-4">
        {photographer.tags.slice(0, 2).map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <button
        onClick={() => onViewProfile(photographer)}
        className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        View Profile
      </button>
    </div>
  </div>
);

export default PhotographerCard;
