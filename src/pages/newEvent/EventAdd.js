import React, { useState } from 'react';

const AddEventForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    source: '',
    earliestYear: '',
    latestYear: '',
    isPositive: false,
    tags: [],
    baseProbability: 3,
    statRanges: {
      politics: { min: '', max: '', probabilitySwing: 0 },
      economy: { min: '', max: '', probabilitySwing: 1 },
    },
    statEffects: {
      qualityOfLife: { change: 10, range: 5 },
      economy: { change: -5, range: -2 },
    },
  });

  // Handle input change for form fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle array fields like tags (multiple values)
  const handleArrayChange = (e) => {
    const { options } = e.target;
    const selectedTags = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedTags.push(options[i].value);
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      tags: selectedTags,
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Just logging the data for now, you can replace this with an API call or form submission logic
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-6xl font-bold mb-8">Add New Event</h1>
      <form className="w-96 space-y-4" onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label className="block text-lg">Event Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 mt-2 rounded-lg bg-white text-black"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-lg">Event Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 mt-2 rounded-lg bg-white text-black"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-lg">Event Image</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full p-2 mt-2 rounded-lg bg-white text-black"
          />
        </div>

        {/* Source URL */}
        <div>
          <label className="block text-lg">Source URL</label>
          <input
            type="url"
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="w-full p-2 mt-2 rounded-lg bg-white text-black"
          />
        </div>

        {/* Date Range */}
        <div className="flex gap-4">
          <div>
            <label className="block text-lg">Earliest Year</label>
            <input
              type="number"
              name="earliestYear"
              value={formData.earliestYear}
              onChange={handleChange}
              className="w-full p-2 mt-2 rounded-lg bg-white text-black"
              required
            />
          </div>
          <div>
            <label className="block text-lg">Latest Year</label>
            <input
              type="number"
              name="latestYear"
              value={formData.latestYear}
              onChange={handleChange}
              className="w-full p-2 mt-2 rounded-lg bg-white text-black"
              required
            />
          </div>
        </div>

        {/* Is Positive */}
        <div>
          <label className="block text-lg">Is Positive?</label>
          <input
            type="checkbox"
            name="isPositive"
            checked={formData.isPositive}
            onChange={handleChange}
            className="mt-2"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-lg">Tags</label>
          <select
            multiple
            name="tags"
            value={formData.tags}
            onChange={handleArrayChange}
            className="w-full p-2 mt-2 rounded-lg bg-white text-black"
          >
            <option value="Space">Space</option>
            <option value="Science">Science</option>
            <option value="Technology">Technology</option>
            <option value="Exploration">Exploration</option>
          </select>
        </div>

        {/* Base Probability */}
        <div>
          <label className="block text-lg">Base Probability</label>
          <input
            type="number"
            name="baseProbability"
            value={formData.baseProbability}
            onChange={handleChange}
            className="w-full p-2 mt-2 rounded-lg bg-white text-black"
          />
        </div>

        {/* Stat Ranges */}
        <div className="flex gap-4">
          <div>
            <label className="block text-lg">Politics Min</label>
            <input
              type="number"
              name="politicsMin"
              value={formData.statRanges.politics.min}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  statRanges: {
                    ...prevData.statRanges,
                    politics: { ...prevData.statRanges.politics, min: e.target.value },
                  },
                }))
              }
              className="w-full p-2 mt-2 rounded-lg bg-white text-black"
            />
          </div>
          <div>
            <label className="block text-lg">Economy Min</label>
            <input
              type="number"
              name="economyMin"
              value={formData.statRanges.economy.min}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  statRanges: {
                    ...prevData.statRanges,
                    economy: { ...prevData.statRanges.economy, min: e.target.value },
                  },
                }))
              }
              className="w-full p-2 mt-2 rounded-lg bg-white text-black"
            />
          </div>
        </div>

        {/* Stat Effects */}
        <div className="flex gap-4">
          <div>
            <label className="block text-lg">Quality of Life Change</label>
            <input
              type="number"
              name="qualityOfLifeChange"
              value={formData.statEffects.qualityOfLife.change}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  statEffects: {
                    ...prevData.statEffects,
                    qualityOfLife: { ...prevData.statEffects.qualityOfLife, change: e.target.value },
                  },
                }))
              }
              className="w-full p-2 mt-2 rounded-lg bg-white text-black"
            />
          </div>
          <div>
            <label className="block text-lg">Economy Change</label>
            <input
              type="number"
              name="economyChange"
              value={formData.statEffects.economy.change}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  statEffects: {
                    ...prevData.statEffects,
                    economy: { ...prevData.statEffects.economy, change: e.target.value },
                  },
                }))
              }
              className="w-full p-2 mt-2 rounded-lg bg-white text-black"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-3 bg-yellow-400 text-black rounded-lg text-lg font-semibold hover:bg-yellow-500 transition duration-300 mt-4"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEventForm;
