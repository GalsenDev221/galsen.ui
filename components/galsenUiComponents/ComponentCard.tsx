import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IComponent } from '@/utils/components'

const ComponentCard: React.FC<IComponent> = ({ image, name, count, alt, link }) => {
  return (
    <div className='w-full'>
      <Link href={link}>
        <div className='w-full h-40 relative'>
          <Image
            src={image}
            alt={alt}
            fill={true}
            className='rounded-md shadow-sm border object-contain'
          />
        </div>
        <h3 className='text-xl mt-3'>{name}</h3>
      </Link>
      <span className='text-sm text-cardDesc'>{count} composants</span>
    </div>
  )
}

export default ComponentCard
