import Countries from "./Components/myCountry/Countries";
import './App.css';
import './styles/ResponsiveStyles.css';

import Header from './Components/header/Header';
function App() {
  return (
    <div className="App">
      <div className="main-container">

        <Header />
        <Countries />
      </div>

    </div>
  );
}

export default App;
