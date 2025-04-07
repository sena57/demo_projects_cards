import React from 'react'
import Card from './Card'

export default function PeopleContainer() {
  return (
    <div>
      <h1>People</h1>
      <div>
        <Card name="hans" title="ceo" imageUrl='https://picsum.photos/200/300'/>
      </div>
    </div>
  )
}
