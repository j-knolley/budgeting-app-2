import axios from "axios";
import Transaction from "./Transaction";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

console.log("Here is the API")
console.log(API)

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`${API}/transactions`)
      .then((response) => {
        setTransactions(response.data)
        console.log(response.data)
      })
      .catch((e) => console.error("catch", e));
  }, []);

  return (
    <div className="Transactions">
      <section>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return <Transaction key={index} transaction={transaction} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;