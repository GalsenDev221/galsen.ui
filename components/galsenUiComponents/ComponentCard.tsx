import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IComponent } from '@/utils/components'

const ComponentCard: React.FC<IComponent> = ({ image, name, count, alt, link }) => {
    return (
        <div className='w-full'>
            <div className='w-full h-40 relative'>
                <Link href={link} className='w-full h-full rounded-md shadow-sm border object-contain'>
                    <Image
                        src={image}
                        alt={alt}
                        fill={true}
                        className='rounded-md shadow-sm border object-contain'
                    />
                </Link>
            </div>
            <h3 className='text-xl mt-3'>{name}</h3>
            <span className='text-sm text-cardDesc'>{count} composants</span>
        </div>
    )
}

export default ComponentCard