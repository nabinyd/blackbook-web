import React, { useState } from 'react'
import DashBoard from './dashboard/DashBoard.jsx'
import MyProjects from './dashboard/MyProjects.jsx';
import Favourites from './dashboard/Favourites.jsx';
import Messages from './dashboard/Messages.jsx';
import Notification from './dashboard/Notification.jsx';

export default function Profile() {
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
                <ul className='flex flex-col items-start justify-between gap-7 mt-8 '>
                    <li onClick={() => setSelectedComponent('Dashboard')} className='hover:text-blue-500' >Dashboard</li>
                    <li onClick={() => setSelectedComponent('MyProjects')} className='hover:text-blue-500'>My Project</li>
                    <li onClick={() => setSelectedComponent('Favourites')} className='hover:text-blue-500'>Favourites</li>
                    <li onClick={() => setSelectedComponent('Messages')} className='hover:text-blue-500'>Messages</li>
                    <li onClick={() => setSelectedComponent('Notifications')} className='hover:text-blue-500'>Notifications</li>
                </ul>
                <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none mt-44' >Log out</button>
            </div>
            <div className="main w-full pt-8 pl-8 pr-24">
                {renderComponent()}
            </div>
        </div>
    )
}
