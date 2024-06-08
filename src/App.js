// Parent Component - will manage the state and pass down the necessary props to the child components.

import React, { useState } from 'react';
import BalanceDisplay from './BalanceDisplay';
import Controls from './Controls';
import './App.css';

function App() {
  const [balance, setBalance] = useState(0);

  //deposit money
  const deposit = (amount) => {
    setBalance(prevBalance => prevBalance + parseFloat(amount));
  };

  //withdraw amount
  const withdraw = (amount) => {
    setBalance(prevBalance => prevBalance - parseFloat(amount));
  };

  //calculate interest
  const addInterest = (rate) => {
    setBalance(prevBalance => prevBalance + (prevBalance * (parseFloat(rate) / 100)));
  };

  const chargeFees = (fee) => {
    setBalance(prevBalance => prevBalance - parseFloat(fee));
  };

  return (
    <div>

      <h1>Banking Application</h1>

      <BalanceDisplay balance={balance} />
    
      <Controls
        deposit={deposit}
        withdraw={withdraw}
        addInterest={addInterest}
        chargeFees={chargeFees}

       />

    </div>
  );
}

export default App;
