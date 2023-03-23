import Home from './pages/Home'
import './App.css';
import Post from './components/Post'
import AllContext from './context/context'

function App() {
  return (
    <AllContext>
      <Home />
    </AllContext>
  );
}

export default App;
