import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux'

import { getBpiUSD } from './redux/actionCreators'
import { ERROR } from './redux/constants'
import { useGetPrice } from './hooks'

function App() {
  const dispatch = useDispatch()

  const { price, loading, error } = useGetPrice()
  return (
    <div className="App">
      <header className="App-header">

        {loading ? <img src={logo} className="App-logo" alt="logo" /> : null}
        <p>
          The current Bitcoin Price Index is {price}
        </p>

        <button onClick={() => dispatch(getBpiUSD("lala"))}>Test Error</button>
        {error ? <p onClick={() => dispatch({ type: ERROR, payload: { error: null } })}>{error.message}</p> : null}
      </header>
    </div>
  );
}

export default App;
