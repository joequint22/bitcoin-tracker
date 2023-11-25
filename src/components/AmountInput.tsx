import React from 'react'
import InputField, { InputFieldProps } from './InputField'


export function AmountInput( props: InputFieldProps){
  return (
    <>
    {/* bg-transparent will eliminate the overlapping of the div container's border and the rounded border... */}
    <div className="flex items-center bg-blue-950 border border-white/10 rounded-lg">
        <InputField 
            placeholder={props.placeholder || ''}
            className="pl-4 border-0 w-24 bg-transparent "
            value={props.value}
            onChange={props.onChange} 
        />
        <span className='text-white/50 px-4 '>USD</span>
    </div>
    </>
  )
}

