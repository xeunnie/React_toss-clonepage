import logo from './logo.svg';
import './App.css';
import HeaderNavBar from './layout/headerNavBar';

function App() {
  return (
    <div className="App">
      <HeaderNavBar/>
      <div className='mainBg'>
        <img src=""/>
      </div>
      
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>toss page cloning</p>
      </div>
    </div>
  );
}

export default App;
