import './App.css';
import Blog from './Components/Blog/Blog';
import SideCard from './Components/Blog/side card/SideCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className='header'>

      </div>

      <div className='main row'>
        <div className='Blog col-md-8'>
          <Blog></Blog>
        </div>

        <div className='sideCard col-md-4'>
          <SideCard></SideCard>
        </div>

      </div>
    </div>
  );
}

export default App;
