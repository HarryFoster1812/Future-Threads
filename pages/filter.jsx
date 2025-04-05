import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import  FilterModal  from './filter_modal.jsx';

function Filter() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');
    const predefinedTags = ['AI', 'Economy', 'Technology', 'Health', 'Science']; // Predefined tags
    const MAX_TAGS = 5; // Limit the number of tags

    // Toggle modal
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    // Handle adding a new tag
    const handleAddTag = (tag) => {
        if (tag && !tags.includes(tag) && tags.length < MAX_TAGS) {
            setTags([...tags, tag]);
            setNewTag(''); // Clear the input after adding
        }
    };

    // Handle removing a tag
    const handleRemoveTag = (tag) => {
        setTags(tags.filter((t) => t !== tag));
    };

    return (
        <>
            <div className="p-4 top-0 sticky z-10 bg-black">
                <button
                    onClick={toggleModal}
                    className="bg-blue-500 p-2 rounded-md text-white flex items-center"
                >
                    <FaFilter id="filter_button" className="fill-white" />
                    <span className="ml-2">Filter</span>
                </button>
            </div>

            {isModalOpen && (
                <FilterModal
                    toggleModal={toggleModal}
                    tags={tags}
                    handleRemoveTag={handleRemoveTag}
                    handleAddTag={handleAddTag}
                    newTag={newTag}
                    setNewTag={setNewTag}
                    predefinedTags={predefinedTags}
                    MAX_TAGS={MAX_TAGS}
                />
            )}
        </>
    );
}


export default Filter;

