import React from 'react';
import Image from 'next/image'; // Ensure you're using the Next.js Image component
import { useState } from 'react';

function SelectStyle() {
    const styleOptions = [
        {
            name: 'Realistic',
            image: '/realistic.jpg',
        },
        {
            name: 'Cinematic',
            image: '/cinematic.png',
        },
        {
            name: 'Cartoon',
            image: '/cartoon.jpg',
        },
        {
            name: 'Animation',
            image: '/animation.jpg',
        },
        {
            name: 'Comic',
            image: '/comic.jpg',
        },
    ];
    const [selectedOption, setSelectedOption]=useState();

    return (
        <div className='mt-7'>
            <h2 className="font-bold text-2xl text-primary">Style</h2>
            <p className="text-gray-500">Select your video style</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3">
                {styleOptions.map((item, index) => (
                    <div key={index} className={`relative hover:scale-105 transition-all rounded-xl
                    ${selectedOption==item.name&&'border-4 border-primary'}`}>
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="h-48 object-cover rounded-lg w-full cursor-pointer"
                            onClick={()=>setSelectedOption(item.name)}

                        />
                        <h2 className='absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SelectStyle;
