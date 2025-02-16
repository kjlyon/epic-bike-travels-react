import { useState } from 'react'
import Entry from "./components/Entry"
import Header from "./components/Header"
import './index.css'
import data from './data'


function App() {
  const entryElements = data.map((entry) => {
    return(
      <Entry
        key={entry.id}
        {...entry}
      />)
  })


  return (
    <>
      <Header />
      <div className="blog">{entryElements}</div>
    </>
  )
}

export default App
