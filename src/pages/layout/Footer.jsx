import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    var date = new Date().getFullYear();
    return (
        <div className='h-20 bg-dark-jet flex items-center  '>
            <div className='sm:mx-auto sm:flex sm: flex-row-reverse justify-between items-center  gap-6 px-7'>
                <div className='sm:flex sm:gap-8 '>
                    <Link to="/termsandcondition">
                        <p>Terms&Conditions</p>
                    </Link>
                    <Link to="/contact">
                        <p>Contact</p>
                    </Link>
                </div>
                <div>
                    <p>© Blackbook {date}. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
