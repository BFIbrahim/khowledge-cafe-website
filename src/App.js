import './App.css';
import Blog from './Components/Blog/Blog';
import Navigation from './Components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Questions from './Components/Questions/Questions';

function App() {
  return (
    <div className="App container">
        <Navigation></Navigation>

        <Blog></Blog>

        <Questions></Questions>
    </div>
  );
}

export default App;
