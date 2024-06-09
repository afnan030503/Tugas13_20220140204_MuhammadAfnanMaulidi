import logo from './nodel.jpg';
import './App.css';

function App() {
  const showAlert = () => {
    alert('Semangat');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Muhammad Afnan Maulidi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <p className="App-description">
         Ini adalah pragraf baru supaya bisa lepas dari tugas
        </p>
        <button className="App-button" onClick={showAlert}>
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
