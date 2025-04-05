import React from 'react';

const LoadMoreButton = ({ onClick }) => {
  return (
    <div className="text-center py-4">
      <button
        onClick={onClick}
        className="px-4 py-2 bg-orange-500 text-white rounded-lg focus:outline-none hover:bg-orange-600"
      >
        Load More Events
      </button>
    </div>
  );
};

export default LoadMoreButton;
