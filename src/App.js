// import logo from './logo.svg';
// import './App.css';
// import carimg from './assets/Images/rolls-royce-cullinan-suv-2019-cars-4k-wallpaper-preview.jpg';
// function App() {
//   return (
//     <div className="App">
//       <h1>Prashant Danshur</h1>
//       {/* <img src={require('./assets/Images/rolls-royce-cullinan-suv-2019-cars-4k-wallpaper-preview.jpg')} /> */}
//       <img src={carimg} width="100%" height="100%" />
//     </div>
//   );
// }

// export default App;

import './App.css';
import Navigation from './components/Navigation';
import SideBar from './components/SideBar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="container">
      <div className="row">
          <SideBar />

          <div className="col-sm-9 right__column">
            <Navigation />

            <HomePage />
          </div>
      </div>
    </div>
  );
}

export default App;