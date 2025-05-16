import React from 'react'

export default function Card({ name, title, imageUrl }: { name: string; title: string; imageUrl: string }) {
  return (
    <div className='border flex h-40'>
      <div>
        <h2>{name}</h2>
        <h4>{title}</h4>
      </div>
      <div className='bg-green-400 w-full'>
        <img src={imageUrl} alt={name} className='object-cover w-full h-full'/>
      </div>
    </div>
  )
}
