import { useEffect, useState } from "react";
import "./App.css";
import { AmountInput } from "./components/AmountInput";
import ResultRow from "./components/ResultRow";
import axios from 'axios'

type CachedResults = {
  provider: string
  btc: string
}

function App() {
  const [amount, setAmount] = useState("");
  const [cachedResults, setCachedResults] = useState<CachedResults[]>([])
  const [isLoading, setIsLoading] = useState(true)
 
  useEffect(() => {
    axios.get('https://sz6tcer3ng.us.aircode.run/cachedValues')
    .then( res => {
         setCachedResults(res.data.results)
         setIsLoading(false)

       })
  }, []);


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
            {!isLoading && cachedResults.map((result, key) => (
              <ResultRow key={key} providerName={result.provider}/>
            )) }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
