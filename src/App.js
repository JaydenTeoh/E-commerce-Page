
import './App.css';
import { Provider } from './store/Context';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
function App() {
  
  return (
    <Provider>
      <main className="App">
        <NavBar />
        <MainPage />
      </main>
    </Provider>
  );
}

export default App;
