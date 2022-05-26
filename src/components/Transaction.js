import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
//we could use (props.transaction.text) but to keep it simpler, we destructure using curly braces"{}" and inputing just transactions.
  const sign = transaction.amount < 0 ? '-' : '+';
   return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
  )
}

//line 7 says if transaction.amount is less than 0 then(?) make it minus else(:) make it plus
