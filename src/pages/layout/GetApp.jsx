import React from 'react'



export default function GetApp() {
    return (

            <div className='sm:flex gap-7 items-center justify-center mt-14'>
                <div>
                    <h1 className='text-center m-3'>
                        Get App on Appstore
                    </h1>
                    <div className='flex items-center justify-center'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="appstore" height="200px" width="200px" />
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-center m-3'>
                        Get App on Playstore
                    </h1>
                    <div className='flex items-center justify-center'>
                        <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="playstore" height="200px" width="200px" />
                    </div>
                </div>
            </div>
    )
}

