// PhotographerProfile.js
import { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Star,
  Share2,
} from "lucide-react";
import InquiryModal from "./InquiryModal";

const PhotographerProfile = ({ photographer, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === photographer.portfolio.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? photographer.portfolio.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {photographer.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <div className="relative mb-6">
                <img
                  src={photographer.portfolio[currentImageIndex]}
                  alt="Portfolio"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100"
                >
                  <ChevronLeft className="w-5 h-5 cursor-pointer" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100"
                >
                  <ChevronRight className="w-5 h-5 cursor-pointer" />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-6">
                {photographer.portfolio.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Portfolio ${index + 1}`}
                    className={`w-full h-16 object-cover rounded cursor-pointer ${
                      index === currentImageIndex ? "ring-2 ring-blue-500" : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="flex items-center mb-4">
                <img
                  src={photographer.profilePic}
                  alt={photographer.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{photographer.name}</h3>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{photographer.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-lg font-semibold ml-1">
                  {photographer.rating}
                </span>
                <span className="text-2xl font-bold text-blue-600 ml-auto">
                  ₹{photographer.price.toLocaleString()}
                </span>
              </div>

              <p className="text-gray-700 mb-4">{photographer.bio}</p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Styles</h4>
                <div className="flex flex-wrap gap-2">
                  {photographer.styles.map((style, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {photographer.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setShowInquiryModal(true)}
                  className="flex-1 cursor-pointer bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Inquiry
                </button>
                <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Share2 className="w-5 h-5 cursor-pointer" />
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-4">Reviews</h4>
            {photographer.reviews.map((review, index) => (
              <div key={index} className="border rounded-lg p-4 mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-semibold">{review.name}</h5>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(review.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      {showInquiryModal && (
        <InquiryModal
          photographer={photographer}
          onClose={() => setShowInquiryModal(false)}
        />
      )}
    </div>
  );
};

export default PhotographerProfile;
