
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'

function App() {

  const Countriespromise =fetch('https://openapi.programming-hero.com/api/all')
  .then (res => res.json())
  
  return (
    <>  
      <Suspense fallback={<h3>Nirov is a coming</h3>}>
        <Countries Countriespromise ={ Countriespromise} ></Countries>
        </Suspense>        
    </>
  )
}

export default App
  