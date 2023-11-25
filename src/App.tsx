import { useState } from 'react'
import './App.css'
import { AmountInput } from './components/AmountInput'
import ResultRow from './components/ResultRow'

function App() {
  const [amount, setAmount] = useState('')

  return (
    <>
    <div id="container" className='h-screen bg-[#113] text-white bg-gradient-radial from-[#272761] via-[#1e1e58] to-[#113]'> 

     <div  className='max-w-2xl mx-auto px-4 py-8'>
      <h1 className='uppercase text-6xl text-center font-bold bg-gradient-to-br from-purple-600 to-sky-400 bg-clip-text text-transparent from-30%'>Find Cheapest BTC</h1>
     </div>
     <div className='flex justify-center mt-6'>
        <AmountInput
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
     </div>
     <div className='mt-6'>
       <ResultRow />
       <ResultRow />
       <ResultRow />
       <ResultRow />
     </div>
    </div>
    </>
  )
}

export default App
 