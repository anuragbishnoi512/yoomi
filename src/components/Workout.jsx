import React from 'react'
import chatPreview from '../assets/images/webp/chat-preview.webp'

const Workout = () => {
  return (
    <div className='-mt-[160px]'>
      <div className='container'>
        <div className='flex justify-center'>
          <img src={chatPreview} alt="preview/image" className='w-full' />
        </div>
      </div>
    </div>
  )
}

export default Workout