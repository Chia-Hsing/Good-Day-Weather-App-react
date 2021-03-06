import React from 'react'

import './style/css/App.css'
import Home from './containers/Home'
import Layout from './components/layout'

function App() {
    return (
        <div className="App">
            <Layout>
                <Home />
            </Layout>
        </div>
    )
}

export default App
