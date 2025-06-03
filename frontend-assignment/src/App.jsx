// App.js
import React, { useState, useEffect, useCallback } from "react";
import { mockPhotographers } from "./db";
import PhotographerCard from "./Components/PhotographerCard ";
import PhotographerProfile from "./Components/PhotographerProfile";
import SkeletonCard from "./Components/SkeletonCard";

const PixispherePlatform = () => {
  const [photographers, setPhotographers] = useState([]);
  const [filteredPhotographers, setFilteredPhotographers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPhotographer, setSelectedPhotographer] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPhotographers(mockPhotographers);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filterPhotographers = useCallback(() => {
    let filtered = photographers.filter((photographer) => {
      return (
        photographer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        photographer.location
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        photographer.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    });
    setFilteredPhotographers(filtered);
  }, [photographers, searchTerm]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  useEffect(() => {
    filterPhotographers();
  }, [searchTerm, photographers, filterPhotographers]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Pixisphere</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Photographers
          </h2>
          <input
            type="text"
            placeholder="Search by name, location, or tag..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Photographer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? [...Array(6)].map((_, index) => <SkeletonCard key={index} />)
            : filteredPhotographers
                .slice(0, visibleCount)
                .map((photographer) => (
                  <PhotographerCard
                    key={photographer.id}
                    photographer={photographer}
                    onViewProfile={setSelectedPhotographer}
                  />
                ))}
        </div>

        {/* Load More Button */}
        {!loading && filteredPhotographers.length > visibleCount && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Load More Photographers
            </button>
          </div>
        )}

        {/* Photographer Profile Modal */}
        {selectedPhotographer && (
          <PhotographerProfile
            photographer={selectedPhotographer}
            onClose={() => setSelectedPhotographer(null)}
          />
        )}
      </div>
    </div>
  );
};

export default PixispherePlatform;
