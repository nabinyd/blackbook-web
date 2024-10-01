import React from 'react'

export default function CategoryField({
    projectData,
    handleInputChange,
    datastore
}) {
    function makeList() {
        let list = [];
        for (let key in datastore.categorylist) {
            list.push(key);
        }
        return list;
    }

    return (
        <div className='mb-8'>
            <label htmlFor='category' className='block text-sm font-medium text-gray-300'>Category <sup>*</sup></label>
            <select id="category" className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                value={projectData.category}
                name='category'
                required
                onChange={handleInputChange}>
                {makeList().sort().map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}
