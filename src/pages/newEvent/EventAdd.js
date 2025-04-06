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
      economy: { min: '', max: '', probabilitySwing: 0 },
      enviroment: { min: '', max: '', probabilitySwing: 0 },
      military: { min: '', max: '', probabilitySwing: 0 },
      qualityOfLife: {min: '', max: '', probabilitySwing: 0}
    },
    statEffects: {
      politics: { change: -5, range: -2},
      economy: { change: -5, range: -2 },
      enviroment: { change: -5, range: -2 },
      military: { change: -5, range: -2 },
      qualityOfLife: {change: -5, range: -2}
    },
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
    const [stats, setStats] = useState(['politics', 'enviroment', 'economy', 'military', 'qualityOfLife' ])

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

  // Validate the form data
  const validateForm = () => {
    const newErrors = {};

    // Title & Description required
    if (!formData.title) newErrors.title = 'Event title is required';
    if (!formData.description) newErrors.description = 'Event description is required';

    // Date range validation
    if (!formData.earliestYear || !formData.latestYear) {
      newErrors.dateRange = 'Both earliest and latest year are required';
    } else if (parseInt(formData.earliestYear) > parseInt(formData.latestYear)) {
      newErrors.dateRange = 'Earliest year must be before the latest year';
    }

    // Image file validation (optional, but if provided must be a valid file)
    if (formData.image && !formData.image.name.match(/\.(jpg|jpeg|png)$/)) {
      newErrors.image = 'Image must be a JPG, JPEG, or PNG file';
    }

    // Base Probability validation
    if (formData.baseProbability < 0 || formData.baseProbability > 100) {
      newErrors.baseProbability = 'Base Probability must be between 0 and 100';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleVarChange =  async (input, type, newValue) =>{

    }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission (e.g., API call)
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setIsSubmitting(false);
      alert('Event added successfully!');
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white py-8 px-4">
      <h1 className="text-6xl font-bold mb-8">Add New Event</h1>
      <form className="w-full max-w-2xl space-y-6" onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label className="block text-lg mb-2">Event Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white text-black"
            placeholder="Enter the event title"
            required
          />
          {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-lg mb-2">Event Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white text-black"
            placeholder="Describe the event"
            rows="4"
            required
          />
          {errors.description && <p className="text-red-500 mt-1">{errors.description}</p>}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-lg mb-2">Event Image (Optional)</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full p-3 rounded-lg bg-white text-black"
          />
          {errors.image && <p className="text-red-500 mt-1">{errors.image}</p>}
        </div>

        {/* Source URL */}
        <div>
          <label className="block text-lg mb-2">Source URL (Optional)</label>
          <input
            type="url"
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white text-black"
            placeholder="Provide a URL for the source"
          />
        </div>

        {/* Date Range */}
        <div className="flex gap-6">
          <div className="flex-1">
            <label className="block text-lg mb-2">Earliest Year</label>
            <input
              type="number"
              name="earliestYear"
              value={formData.earliestYear}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white text-black"
              placeholder="Enter earliest year"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-lg mb-2">Latest Year</label>
            <input
              type="number"
              name="latestYear"
              value={formData.latestYear}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white text-black"
              placeholder="Enter latest year"
              required
            />
          </div>
        </div>
        {errors.dateRange && <p className="text-red-500">{errors.dateRange}</p>}

        {/* Is Positive */}
        <div>
          <label className="block text-lg mb-2">Is Positive?</label>
          <input
            type="checkbox"
            name="isPositive"
            checked={formData.isPositive}
            onChange={handleChange}
            className="mt-2"
          />
        </div>

        {/* Base Probability */}
        <div>
          <label className="block text-lg mb-2">Base Probability (0-100)</label>
          <input
            type="number"
            name="baseProbability"
            value={formData.baseProbability}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white text-black"
            min="0"
            max="100"
          />
          {errors.baseProbability && <p className="text-red-500 mt-1">{errors.baseProbability}</p>}
        </div>

        {/* Stat Ranges */}

      {stats.map((stat, index) => (
        <div key={index} className="flex items-center space-x-4 mb-4 text-white">
          <div className="flex-1">
            <label className="block text-sm font-medium ">Min</label>
            <input
              type="number"
              onChange={(e) => handleChange(stat, 'min', e.target.value)}
              min="0"
              max={stat.max}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium ">Max</label>
            <input
              type="number"
              onChange={(e) => handleChange(stat, 'max', e.target.value)}
              min={stat.min}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium ">Change</label>
            <input
              type="number"
              onChange={(e) => handleChange(stat, 'change', e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium ">Range</label>
            <input
              type="number"
              onChange={(e) => handleChange(stat, 'range', e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      ))}       {/* Submit Button */}
        <div className="flex items-center justify-center">
        <button
          type="submit"
          className={`px-6 py-3 ${isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-yellow-400'} text-black rounded-lg text-lg font-semibold hover:bg-yellow-500 transition duration-300 mt-4`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Add Event'}
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddEventForm;

