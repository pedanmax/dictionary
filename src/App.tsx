import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ConfirmProvider } from 'material-ui-confirm';
import theme from './theme';
import Drawer from './components/Drawer/Drawer';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Router from './Router/Router';
import './App.scss';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ConfirmProvider>
        <Container sx={{
          padding: {
            xs: '0px',
            sm: '0px',
            md: '0px',
          },
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
        }}
        >
          <Drawer />
          <Menu />
          <main style={{ flex: '1 1 auto', padding: '10px' }}>
            <Router />
          </main>
          <Footer />
        </Container>
      </ConfirmProvider>
    </ThemeProvider>
  );
};
export default App;
