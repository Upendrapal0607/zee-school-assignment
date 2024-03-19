import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { MainRoute } from './Routes/MainRoute';
import Footer from './Components/Footer';
import VisitList from './Components/AppintmentList';
// import { AppintmentList } from './Components/AppintmentList';


function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <MainRoute/>
      <Footer/>
    </div>
  );
}

export default App;
