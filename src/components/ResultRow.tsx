import React from 'react'

type ResultRowProps = {
    loading?: boolean
}


export default function ResultRow({ loading }: ResultRowProps) {
  return (
    <>
    <div className='relative overflow-hidden border min-h-12 border-white/10 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 my-2'>
        <div className='flex gap-4'>
            <div>logo</div>
            {/* //grow will make this div take up all of the space between the next div */}
            <div className='grow'>providers name</div>
            <div className='flex gap-2'>
                <span className='text-xl text-purple-200/80'>0.000</span>
                <span className='text-xl text-purple-300/50'>BTC</span>
            </div>
            {loading && (
                <div className='inset-0 absolute bg-gradient-to-r from-transparent via-blue-800/50 to-transparent skeleton-animation'/>
            )}
        </div>
    </div>
    </>
  )
}