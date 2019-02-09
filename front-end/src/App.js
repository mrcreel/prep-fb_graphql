import React, {Component} from 'react'
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import './App.css'

import MainNavigation from './components/navigation/MainNavigation'

import TeamsPage from './pages/Teams'
import YearsPage from './pages/Years'
import RegionsPage from './pages/Regions'
import HomePage from './pages/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation />
          <main className="main-content">
            <Switch>
              <Redirect from="/" to="/home" exact></Redirect>
              <Route path="/teams" component = {TeamsPage}></Route>
              <Route path="/years" component = {YearsPage}></Route>
              <Route path="/regions" component = {RegionsPage}></Route>
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App