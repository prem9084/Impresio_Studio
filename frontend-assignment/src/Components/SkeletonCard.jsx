// SkeletonCard.js
const SkeletonCard = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-gray-300"></div>
    <div className="p-4">
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded mb-4 w-1/2"></div>
      <div className="flex gap-2 mb-4">
        <div className="h-6 bg-gray-300 rounded-full w-16"></div>
        <div className="h-6 bg-gray-300 rounded-full w-20"></div>
      </div>
      <div className="h-10 bg-gray-300 rounded"></div>
    </div>
  </div>
);

export default SkeletonCard;
