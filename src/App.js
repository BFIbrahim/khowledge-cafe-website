import './App.css';
import Blog from './Components/Blog/Blog';
import SideCard from './Components/Blog/side card/SideCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container">
      <div className='header'>
        <nav className="navbar bg-body-tertiary">
          <div className="container navigation">
            <a className="navbar-brand fw-bold">Big Future Group</a>

            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.537113037.1680249376&semt=sph" alt="" />
          </div>
        </nav>
      </div><hr />

      <div className='main row mt-3'>
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
