import React from 'react'

interface CardProps {
  name: string;
  title: string;
  imageUrl: string;
}

export default function Card({ name, title, imageUrl }: CardProps) {
  return (
    <div className='border m-5'>
      <h2>{name}</h2>
      <h4>{title}</h4>
      <img src={imageUrl} alt={name} />
    </div>
  )
}
