import { Container } from '@mui/material';
import Drawer from './components/Drawer/Drawer';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Router from './Router/Router';
import './App.scss';

const App = () => {
  return (
    <Container sx={{
      padding: {
        sm: '0px',
        md: '0px 24px 0px 24px',
      },
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
    }}
    >
      <Drawer />
      <Menu />
      <Router />
      <Footer />
    </Container>
  );
};
export default App;
