import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './cmp/Home'
import About from './cmp/About'
import Navbar from './cmp/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;
