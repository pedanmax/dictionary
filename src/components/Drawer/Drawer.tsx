import {
  Link,
} from 'react-router-dom';

const Drawer = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/learn">Learn</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Drawer;
