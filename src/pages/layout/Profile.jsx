import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashBoard from '../dashboard/DashBoard.jsx'
import MyProjects from '../dashboard/MyProjects.jsx';
import Favourites from '../dashboard/Favourites.jsx';
import Messages from '../dashboard/Messages.jsx';
import Notification from '../dashboard/Notification.jsx';
import { UserserviceContext } from '../../context/UserServiceContext.jsx';
import { ProjectServiceContext } from '../../context/ProjectServiceContext.jsx';

export default function Profile() {
    const { userData, isUserLoggedIn, loading } = useContext(UserserviceContext);
    const { fetchFavouritesProjects, } = useContext(ProjectServiceContext);


    const navigate = useNavigate();

    console.log(isUserLoggedIn);


    if (loading) {
        return <h1>Loading...</h1>
        
    }
    const [selectedComponent, setSelectedComponent] = useState('Dashboard')

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'Dashboard':
                return <DashBoard />;
            case 'MyProjects':
                return <MyProjects />
            case 'Favourites':
                return <Favourites />
            case 'Messages':
                return <Messages />
            case 'Notifications':
                return <Notification />
            default:
                return <DashBoard />
        }
    }


    return (
        <div className='flex items-start border-t-2 border-slate-900'>
            <div className='sidebar w-1/5 border-r-2 h-auto p-5 pl-10'>
                <div className='flex items-center gap-3'>
                    <div>
                        <h1 className='text-lg font-semibold'>{userData.username}</h1>
                        <p className='text-sm text-gray-500'>{userData.email}</p>
                    </div>
                </div>
                <ul className='flex flex-col items-start justify-between gap-7 mt-8 '>
                    <li onClick={() => setSelectedComponent('Dashboard')} className={
                        selectedComponent === 'Dashboard' ? 'text-blue-500 cursor-pointer' : 'text-gray-300 cursor-pointer'

                    } >Dashboard</li>
                    <li onClick={() => setSelectedComponent('MyProjects')} className={
                        selectedComponent === 'MyProjects' ? 'text-blue-500 cursor-pointer' : 'text-gray-300 cursor-pointer'
                    }>My Project</li>
                    <li onClick={() => setSelectedComponent('Favourites')} className={
                        selectedComponent === 'Favourites' ? 'text-blue-500 cursor-pointer' : 'text-gray-300 cursor-pointer'
                    }>Favourites</li>
                    <li onClick={() => setSelectedComponent('Messages')} className={
                        selectedComponent === 'Messages' ? 'text-blue-500 cursor-pointer' : 'text-gray-300 cursor-pointer'
                    }>Messages</li>
                    <li onClick={() => setSelectedComponent('Notifications')} className={
                        selectedComponent === 'Notifications' ? 'text-blue-500 cursor-pointer' : 'text-gray-300 cursor-pointer'
                    }>Notifications</li>

                </ul>
                <Link to='/createproject' >
                    <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none mt-44' >Create new project</button>
                </Link>
            </div>
            <div className="main w-full pt-8 pl-8 pr-24">
                {renderComponent()}
            </div>
        </div>
    )
}
