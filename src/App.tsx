import Drawer from './components/Drawer/Drawer';
import Footer from './components/Footer/Footer';
import Router from './Router/Router';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Drawer />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
