import React from 'react';

function About() {
    return (
        <div className="about mx-auto">
            <div className=''>
                <h1 className=' sm:text-5xl text-center font-bold mt-6 text-3xl'> About us</h1>

                <div class="sm:p-16  sm:border  sm:border-white/30 sm:mt-16 rounded-lg mx-auto sm:w-3/5  sm:shadow-md sm:shadow-gray-600 sm:drop-shadow-md ">
                    <ul class="list-disc list-outside  space-y-6 sm:text-2xl text-lg sm:text-justify font-sans leading-relaxed  text-gray-300 mx-8">
                        <li >
                            Blackbook serves as a comprehensive archive.
                        </li>
                        <li>
                            Featuring <span >final year bachelor projects, hackathon creations, and other exceptional works</span> from academic and professional events.
                        </li>

                        <li>
                            Hub where these projects can be shared, discovered, and appreciated by a worldwide community.
                        </li>

                        <li>
                            Every project, big or small, holds immense value and potential to inspire others.
                        </li>
                    </ul>
                </div>
                <div className="my-14 flex flex-col items-center justify-center bg-neutral-900">
                    <div className="p-11 mb-4 sm:text-3xl font-serif font-bold text-center  text-gray-300 ">
                        Join us in celebrating the spirit of innovation and creativity. <br /> <span className='decoration-1 underline  underline-offset-2'>
                            Welcome to Blackbook - <span className='text-sky-400'>
                                where ideas come to life!
                            </span>
                        </span>
                    </div>
                    <a href='https://www.facebook.com/profile.php?id=61563365167954' target='_blank' rel='noreferrer' className='border  hover:bg-blue-600 text-white font-bold py-3 px-4 mb-14 rounded'>
                        Community
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;