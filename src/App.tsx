import { useEffect, useState } from "react";
import "./App.css";
import { AmountInput } from "./components/AmountInput";
import ResultRow from "./components/ResultRow";
import axios from 'axios'
import { sortBy } from 'lodash'
import useDebouncedEffect from 'use-debounced-effect'

type CachedResults = {
  provider: string
  btc: string
}

type OfferResults = {[key:string]:string}


const defaultAmount = '100'

function App() {
  const [prevAmount, setPrevAmount] = useState('100')
  const [amount, setAmount] = useState("100");
  const [cachedResults, setCachedResults] = useState<CachedResults[]>([])
  const [offerResults, setOffersResults] = useState<OfferResults>({})
  const [isLoading, setIsLoading] = useState(true)
 
  useEffect(() => {
    axios.get('https://sz6tcer3ng.us.aircode.run/cachedValues')
    .then( res => {
         setCachedResults(res.data)
         setIsLoading(false)

       })
  }, []);

  useDebouncedEffect(() => {
    if (amount === defaultAmount){
      return;
    }
    if(amount !== prevAmount )
    setIsLoading(true)
    axios.get(`https://sz6tcer3ng.us.aircode.run/offers?amount=${amount}`)
    .then(res => {
      setIsLoading(false)
      setOffersResults(res.data)
      setPrevAmount(amount)
    })
  }, 300, [amount])

  const sortedCache = sortBy(cachedResults, 'btc').reverse()
  const sortedResults:CachedResults[] = sortBy(Object.keys(offerResults).map(provider => ({
    provider,
    btc:offerResults[provider]
  }))).reverse()

  const showCached = amount === defaultAmount

  return (
    <>
      <div
        id="container"
        className="h-screen bg-[#113] text-white bg-gradient-radial from-[#272761] via-[#1e1e58] to-[#113]"
      >
        <div className="mx-auto px-4 py-8 max-w-2xl ">
          <h1 className="uppercase text-6xl text-center font-bold bg-gradient-to-br from-purple-600 to-sky-400 bg-clip-text text-transparent from-30%">
            Find Cheapest BTC
          </h1>
          <div className="flex justify-center mt-6">
            <AmountInput
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              />
          </div>
          <div className="mt-6 ">
            {isLoading && (
              <>
                <ResultRow loading={true} />
                <ResultRow loading={true} />
                <ResultRow loading={true} />
                <ResultRow loading={true} />
              </>
            )}
            {!isLoading && showCached && sortedCache.map((result: CachedResults, key) => (
              <ResultRow 
                key={key}
                providerName={result.provider}
                btc={result.btc}
              
              />
            )) }
            {
              !isLoading && !showCached && (
                sortedResults.map((result, key) => (
                  <ResultRow 
                  key={key}
                  providerName={result.provider}
                  btc={result.btc}
                
                />
                ))
              )
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
