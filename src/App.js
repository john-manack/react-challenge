import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PhotoForm from './components/PhotoForm'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Stock Photo Generator</h1>
        <Switch>
          <PhotoForm />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
