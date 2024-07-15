import React, { useState } from 'react';
import { initialProjectData } from '../../Constant.js';

// Sample data for search results
// const data = [
//     'Apple',
//     'Banana',
//     'Cherry',
//     'Date',
//     'Elderberry',
//     'Fig',
//     'Grape',
//     'Honeydew'
// ];

function SearchBar({data}) {
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const [selectedTag, setSelectedTag] = useState([]);
    const [projectData, setProjectData] = useState(initialProjectData);

    console.log(selectedTag);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        filterData(value);
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
        setProjectData({ ...projectData, tags: [...projectData.tags, item] });
    };

    return (
        <div className="search-bar mb-5">
            <input
                className='text-black'
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
            />
            {filteredData.length > 0 && (
                <ul className="dropdown text-white">
                    {filteredData.map((item, index) => (
                        <li className='text-green-400' key={index} onClick={() => handleItemClick(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
            <div className="tags">
                {selectedTag.map((tag, index) => (
                    <span key={index} className="tag p-2">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
