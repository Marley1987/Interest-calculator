// display balance

import React from 'react';

function BalanceDisplay({ balance }) {
  return (
    <div>
      <h2>Current Balance: £{balance.toFixed(2)}</h2>
    </div>
  );
}

export default BalanceDisplay;
