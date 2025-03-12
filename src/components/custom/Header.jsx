import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton } from '@clerk/clerk-react'

function Header() {
    return (
        <div className='w-screen p-3 px-30 flex justify-between shadow-md'>
            <Link to={'/dashboard'}>
                <span className="text-3xl font-bold text-indigo-600">ResumeMint</span>
            </Link>
            <div className='flex gap-2 items-center'>
                    <Button>Search</Button>
                    <UserButton />
                </div>
        </div>
    );
}

export default Header;