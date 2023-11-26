import React from 'react'
import paybisLogo from '../assets/paybis-logo.png'
import moonpayLogo from '../assets/moonpay-logo.png'
import transakLogo from '../assets/transak-logo.png'
import gauradarianLogo from '../assets/gaurdarian-logo.png'

type ResultRowProps = {
    loading?: boolean
    providerName?: string
    btc?: string
}

type TLogo = {
    source: string
    invert?:boolean
}
const logos: {[keys:string]: TLogo} = {
    paybis: {source: paybisLogo, invert:true},
    moonpay: {source: moonpayLogo, invert:true},
    transak: {source: transakLogo},
    gaurdarian: {source: gauradarianLogo}
}

export default function ResultRow({ 
    loading, providerName, btc
 }: ResultRowProps) {

  return (
    <> 
    <div className='relative overflow-hidden border h-[64px] border-white/10 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 my-2'>
        <div className='flex gap-4'>
            {providerName && (
            
            <div className="grow items-center flex">
            <img
              src={logos[providerName].source}
              className={
                "h-8 "+(logos[providerName]?.invert ? 'invert' : '')
              }
              alt=""/>
          </div> 
                
            )}

            {btc && (
                <>
                <div className='flex gap-2'>
                    <span className='text-xl text-purple-200/80'>{
                        new Intl.NumberFormat(undefined, {minimumFractionDigits:8}).format(parseFloat(btc))
                    }</span>
                    <span className='text-xl text-purple-300/50'>BTC</span>
                </div> 
                </>
            )

            }
            {loading && (
                <div className='inset-0 absolute bg-gradient-to-r from-transparent via-blue-800/50 to-transparent skeleton-animation'/>
            )}
        </div>
    </div>
    </>
  )
}
