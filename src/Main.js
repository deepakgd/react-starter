import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'
import Car from './components/Car.js'
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/car' component={Car}/>
      </Switch>
    </main>
  )

export default Main;
