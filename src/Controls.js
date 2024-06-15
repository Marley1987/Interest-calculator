// Child Component for deposit, withdraw, add interest, and charge fees

import React, { useState } from 'react';

function Controls({ deposit, withdraw, addInterest, chargeFees }) {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [fee, setFee] = useState('');

  //deposit
  const handleDeposit = () => {
    deposit(amount);
    setAmount('');
  };

  //calculate for withdraw
  const handleWithdraw = () => {
    withdraw(amount);
    setAmount('');
  };
//calculate interest
  const handleAddInterest = () => {
    addInterest(rate);
    setRate('');
  };
//bank fees
  const handleChargeFees = () => {
    chargeFees(fee);
    setFee('');
  };

  return (
    <div className='Controls'>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        &nbsp;
        <button onClick={handleDeposit}>Deposit</button>&nbsp;
        <button onClick={handleWithdraw}>Withdraw</button>
      
      </div>
      &nbsp;
      <div>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Interest Rate (%)"
        />

        &nbsp;
        <button onClick={handleAddInterest}>Add Interest</button> &nbsp; 
      </div>
      &nbsp;
      
      <div>
        <input
          type="number"
          value={fee}
          onChange={(e) => setFee(e.target.value)}
          placeholder="Bank Fee"
        />
        &nbsp;
        <button onClick={handleChargeFees}>Charge Fees</button>
      </div>
    </div>

  
  );
}

export default Controls;