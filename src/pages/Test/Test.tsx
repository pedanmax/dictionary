import { useSelector } from 'react-redux';
import Empty from '../../components/Empty/Empty';
import './Test.scss';
import { StoreType } from '../../types/types';

const Test = () => {
  const { words } = useSelector((state: StoreType) => state);
  return words?.length
    ? (<h1 className='test'>test</h1>)
    : (<Empty text='test' />);
};

export default Test;
