import React from 'react'



export default function ResultRow() {
  return (
    <>
    <div className='border min-h-12 border-white/10 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 my-2'>
        <div className='flex gap-4'>
            <div>logo</div>
            //grow will make this div take up all of the space between the next div
            <div className='grow'>providers name</div>
            <div>
                <span>0.001</span>
                <span>BTC</span>
            </div>
        </div>
    </div>
    </>
  )
}