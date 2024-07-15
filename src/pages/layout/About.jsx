import React from 'react';
import AboutUsIcon from '../../assets/icons/about us.png'

function About() {
    return (
        <div className="about text-white">
            <div className='h-screen w-9/12 mx-auto flex items-center'>
                <div className='Logo w-1/3'>
                    <img src={AboutUsIcon} alt="About us logo" className='h-64 w-64' />
                </div>
                <div className='w-full ml-11'>
                    <h1 className=' text-4xl pt-20 pb-10 font-bold'> About us</h1>
                    <p className='text-justify mb-4 text-lg'>
                        Welcome to Blackbook, its a platform where you can share your projects and creativity with the world. At Blackbook we are dedicated to curating and showcasing a diverse collection of projects that represent the ingenuity and hard work of students, graduates, and professionals. Ours platform serves as a comprehensive archive of final year abchelor projects, hackathon creations, and other remarkable works developed during various academic and professional events.
                    </p>
                    <p className='text-justify mb-4 text-lg'>Our mission is to provide a space where projects can be shared, discoverd, and appreciated by a global audience. We believe that every project, big or small, holds immerse value and potential to inspire others. By bringing together projects From various fields, including electronics, communication, information engineering, and beyond, we aim to foster a community of learners and innovators who can learn from each other and collaborate on future endeavors.</p>

                    {/* <p className='text-justify'>Join us in celebrating the spirit of innovation and creativity. Explore our collection, share your own projects, and be a part of a growing network of thinkers, makers, and doers. Welcome to Blackbook - where ideas come to life!</p> */}
                </div>
            </div>
        </div>
    );
}

export default About;