import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      {/* <ActivityCompleted/> */}
      <Toaster/>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
