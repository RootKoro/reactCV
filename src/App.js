// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Section from './Section';
import Sidebar from './Sidebar';
import Footer from './Footer';

function App() {
  // const me = {name : 'Cyr Mathieu', age : 20}
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <div className="container">
        <Section />
        <div className="right">
          <Sidebar />
        </div>
      </div>
      <Footer />
      {/* <div className="content">
        <h1>{me.name + ' is ' + me.age} years old</h1>
      </div> */}
    </div>
  );
}

export default App;
