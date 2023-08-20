import React from 'react';
import { Card } from './components/';
import { IChecklist } from './types';

export const Checklist = () => {
  const data: IChecklist [] = [{
    title:'a',
    items: ['b', 'c']
  }]
  return (
    <div className='p-6 grid'>
      {data.map(item => {
        return <Card key={item.title} {...item} />
      })}
    </div>
  )
}
