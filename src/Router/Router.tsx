import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Test from '../pages/Test/Test';
import Learn from '../pages/Learn/Learn';
import NotFound from '../pages/NotFound/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/test' element={<Test />} />
      <Route path='/learn' element={<Learn />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Router;
