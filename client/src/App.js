import {useState} from 'react';
import myApi from './api/Api';   
import './App.css';

function App() {
  console.log(process.env.NODE_ENV);
  // const [user,setUser] = useState('');
  const getReq = async () => { 
    const {data} = await myApi.get('/users');
    console.log(data);
  }
  return (
    <div className="App">
    {' '}
     Hello World!!
     <button onClick={getReq}>get</button>
    </div>
  );
}

export default App;
