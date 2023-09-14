import React from 'react'
import Layout from './features/layout'
import Home from './components/Home'
import Info from "./components/Info"
import Cards from "./components/Cards"
import Featured from "./components/Featured";
import Step from "./components/Step"
const App = () => {
  return (
    <div>
      <Layout>
        <main>
          <Home />
          <Info />
          <Cards />
          <Featured />
          <Step />
        </main>
      </Layout>
    </div>
  )
}

export default App