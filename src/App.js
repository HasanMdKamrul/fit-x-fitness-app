import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';

function App() {
  return (
    <div>
      {/* <ActivityCompleted/> */}
      <Toaster/>
      <Navbar/>
      <Home/>
      <QuestionAnswer/>
    </div>
  );
}

export default App;
