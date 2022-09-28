import { Toaster } from 'react-hot-toast';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';

function App() {
  return (
    <div>
      <Toaster/>
      <Navbar/>
      <Home/>
      <QuestionAnswer/>
      <Footer/>
    </div>
  );
}

export default App;
