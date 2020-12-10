
import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";
import {GlobalContextProvider} from "./context/GlobalState";

import './App.css';

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <AddTransaction />
          <IncomeList />
          <ExpenseList />
          <h1>React Tutorial</h1>
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
