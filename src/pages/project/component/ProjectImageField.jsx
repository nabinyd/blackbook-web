import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'


export default function ProjectImageField({
    projectData,
    setProjectData
}) {
    const [previewImage, setPreviewImage] = useState([]);
    const [urlToFileMap, setUrlToFileMap] = useState(new Map());

    const handleImageFileChange = (e) => {
        if (e.target.files) {
            const fileList = e.target.files;
            const filesArray = Array.from(fileList);
            const newUrls = filesArray.map((file) => URL.createObjectURL(file));

            setPreviewImage((prevImages) => prevImages.concat(newUrls));

            // Update URL to File mapping
            const newUrlToFileMap = new Map(urlToFileMap);
            newUrls.forEach((url, index) => {
                newUrlToFileMap.set(url, filesArray[index]);
            });
            setUrlToFileMap(newUrlToFileMap);

            setProjectData((prevData) => ({
                ...prevData,
                imagesUrl: [...prevData.imagesUrl, ...filesArray],
            }));

            e.target.value = '';
        }
    };

    const deleteImage = (url) => {
        // Remove image from previewImage state
        const filteredImages = previewImage.filter((image) => image !== url);
        setPreviewImage(filteredImages);

        // Remove image from projectData.imagesUrl
        const fileToRemove = urlToFileMap.get(url);
        const filteredImagesUrl = projectData.imagesUrl.filter((file) => file !== fileToRemove);

        // Update project data
        setProjectData((prevData) => ({
            ...prevData,
            imagesUrl: filteredImagesUrl,
        }));

        // Remove from URL to File mapping
        const newUrlToFileMap = new Map(urlToFileMap);
        newUrlToFileMap.delete(url);
        setUrlToFileMap(newUrlToFileMap);

        URL.revokeObjectURL(url);
    };


    const renderPhotos = (source) => {
        return source.map((photo, index) => {
            return <div className='flex'>
                <img key={photo || index} src={photo} alt='preview' height={"300px"} className='p-3 h-52 w-64' />
                <FontAwesomeIcon
                    icon={faDeleteLeft}
                    onClick={() => deleteImage(photo)} className='h-4 w-8' />
            </div>
        });
    };


    return (
        <div className='mb-10 border border-gray-800 rounded-md p-1 py-3'>
            <div>
                <label htmlFor='project image' className='block text-sm font-medium text-gray-300'>Project Image(max: 5) <sup>*</sup></label>
                <input type='file' multiple accept='.jpg,.jpeg,.png' className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                    name='imagesUrl'
                    onChange={handleImageFileChange}
                />
            </div>
            <div className='flex gap-x-2 items-center'>
                <h2>{projectData.imagesUrl.length} item selected</h2>
            </div>
            <div className='preview gap-1  '>
                {renderPhotos(previewImage)}
            </div>
        </div>
    )
}
