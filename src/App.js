import Navbar from './components/Navbar'
import HeroSection from './components/pages/HeroSection'
import About from './components/pages/About'
import Events from './components/pages/Events'
import Members from './components/pages/Members'
import Contact from './components/pages/Contact'
import Gallery from './components/pages/Gallery'
import Register from './components/pages/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={HeroSection} />
          <Route path='/About' exact component={About} />
          <Route path='/Events' exact component={Events} />
          <Route path='/Members' exact component={Members} />
          <Route path='/Register' exact component={Register} />
          <Route path='/Contact' exact component={Contact}/>
          <Route path='/Gallery' exact component={Gallery} />
        </Switch>
      </Router>
      </>
  )
}

export default App;

