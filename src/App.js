// import About from './about';
import './App.css';
import Footerfun from './component/Footer';
import Mainfun from './component/Main';
import Navbar from './component/Navbar';
import Todo from './component/Todo';



function App() {
  return (
    <>
      {/* navbar */}
      
        <Navbar/>
        <Footerfun/>
      {/* navbar end */}
    </>
  );
}

export default App;
