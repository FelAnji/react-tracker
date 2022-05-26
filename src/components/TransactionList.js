import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
        <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>))}

      </ul>
    </>
  )
}

//the trasactions.map(line 12) means for each transactions, output(=>) the list(li)
// line 7 pulls out the transactions from the GlobalContext
