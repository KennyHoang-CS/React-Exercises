import VendingMachine from './VendingMachine';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Coke from './Coke';
import Chip from './Chip';
import CupNoodle from './CupNoodle';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/coke">
          <Coke/>
        </Route>
        <Route exact path="/cupnoodles">
          <CupNoodle/>
        </Route>
        <Route exact path="/chips">
          <Chip/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
