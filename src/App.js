import logo from './logo.svg';
import './App.css';
import PlayerForm from './components/playerSignup';
import AllPlayer from './pages/allPlayerView';
import AdminView from './pages/AdminView/Admin';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <PlayerForm/>
        <AdminView/>
        <AllPlayer/>
      </header>
    </div>
  );
}

export default App;
