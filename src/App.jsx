import { ThemeProvider } from './context/ThemeContext';
import Stopwatch from './components/Stopwatch';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>Vibe Stopwatch</h1>
        <Stopwatch />
      </div>
    </ThemeProvider>
  );
}

export default App;
