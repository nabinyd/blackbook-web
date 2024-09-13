import React, { useState } from 'react';

function SearchBar({ data, projectData, setProjectData }) {
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const [selectedTag, setSelectedTag] = useState([]);

    console.log(selectedTag);

    const handleInputChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setQuery(value);
        filterData(value);

        if (value === '') {
            setFilteredData([]);
            setQuery('');
        }
    };

    const filterData = (searchQuery) => {
        if (searchQuery) {
            const results = data.filter((item) =>
                item.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredData(results);
        } else {
            setFilteredData([]);
        }
    };

    const handleItemClick = (item) => {
        setQuery(item);
        setFilteredData([]);
        setSelectedTag([...selectedTag, item]);
        setProjectData({
            ...projectData,
            tags: [...projectData.tags, item]
        });
    };

    const clearTag = (tag) => {
        const newTags = selectedTag.filter((t) => t !== tag);
        setSelectedTag(newTags);
        setProjectData({ ...projectData, tags: newTags });
    }

    return (
        <div className="search-bar mb-5">
            <input
                className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet'
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
            />
            {filteredData.length > 0 && (
                <ul
                    className="dropdown text-white">
                    {filteredData.map((item, index) => (
                        <li
                            className='text-gray-200 px-1 my-1 hover:bg-blue-600 hover:cursor-pointer bg-neutral-900 rounded-md' key={index} onClick={() => handleItemClick(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
            <div className="tags">
                <ul className='flex mt-2'>
                    {projectData.tags && projectData.tags.map((tag, index) => (
                        <li
                            key={index}
                            className='bg-dark-jet px-3 py-1 text-sm rounded mr-1 w-fit'>
                            {tag}
                            <button onClick={() => clearTag(tag)} className='ml-2'>x</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchBar;
