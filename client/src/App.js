import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'

import { getBpiUSD, changeName } from './redux/actionCreators'

function App() {
  const dispatch = useDispatch()

  const { price } = useSelector(state => state)



  useEffect(() => {
    dispatch(getBpiUSD())
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The current Bitcoin Price Index is {price}
        </p>

      </header>
    </div>
  );
}

export default App;
