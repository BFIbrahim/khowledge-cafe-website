import './App.css';
import Blog from './Components/Blog/Blog';
import Navigation from './Components/Navigation/Navigation';
import SideCard from './Components/side card/SideCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container">
        <Navigation></Navigation>

        <Blog></Blog>

      {/* <div className='main row mt-3'>
        <div className='Blog col-md-8'>
          <Blog addReadTime = {addReadTime}></Blog>
        </div>

        <div className='sideCard col-md-4'>
          <SideCard></SideCard>
        </div>
      </div> */}



    </div>
  );
}

export default App;
