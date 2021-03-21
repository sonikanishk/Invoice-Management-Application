import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBuyer from './components/Searchbuyer'
// import SearchSupplier from './components/Searchsupplier'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import dotenv from 'dotenv';
dotenv.config();

function App() {
  return (
    <div className="page-element">
      <div style={{flex: "1"}}>
        <Router>
          <Header/>
          <SearchBuyer/>
          <Switch>
            <Route path="/" />
            {/* <Route path="/supplier" component={SearchSupplier}/>
            <Route path="/buyer"  component={SearchBuyer}/> */}
            
          </Switch>
        </Router>
      </div> 
      <Footer/>
    </div>
  );
}

export default App;
