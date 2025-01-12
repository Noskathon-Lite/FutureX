"use client"
import { PanelsTopLeft, FileVideo, ShieldPlus, CircleUser } from 'lucide-react';
import Link from 'next/link';  // Use Link from 'next/link' for routing in Next.js
import { usePathname } from 'next/navigation';
import React from 'react';

function SideNav() {
    const MenuOption = [
        {
            id: 1,
            name: 'Dashboard',
            path: '/dashboard',
            icon: PanelsTopLeft
        },
        {
            id: 2, // Ensure unique id for each item
            name: 'Create New',
            path: '/dashboard/create-new',
            icon: FileVideo
        },
        {
            id: 3, // Ensure unique id for each item
            name: 'Upgrade',
            path: '/upgrade',
            icon: ShieldPlus
        },
        {
            id: 4, // Ensure unique id for each item
            name: 'Account',
            path: '/account',
            icon: CircleUser
        }
    ];
    const path=usePathname();

    return (
        <div className='w-64 h-screen shadow-md p-5'>
            <div className='grid gap-3'>
                {MenuOption.map((item) => {
                    return (
                        <Link key={item.id} href={item.path}> {/* Use Link here for Next.js routing */}
                            <div className={`flex items-center gap-3 p-3 hover:bg-primary hover:text-white rounded-md cursor-pointer ${path==item.path&&'bg-primary text-white'}`}>
                                <item.icon />
                                <h2>{item.name}</h2>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default SideNav;
