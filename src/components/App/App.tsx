import React from 'react'
import './App.css'
import Layout from '../Layout/Layout'
import Window from '../window/Window'

const App = () => {
  const cities = ['Saint-Petersburg', 'Samara', 'Saratov', 'Saransk', 'Moscow', 'Kolomna', 'Arkhangelsk']
  return (
      <>
        <Layout>
          <Window title="7 Days Forecast" cities={cities} />
        </Layout>
      </>
  )
}

export default App
