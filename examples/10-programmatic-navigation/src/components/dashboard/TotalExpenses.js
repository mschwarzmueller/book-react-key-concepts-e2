import { getOrdersSummaryData } from '../../data/orders';
import DashboardElement from './DashboardElement';
import classes from './TotalExpenses.module.css';

function TotalExpenses() {
  const totalExpenses = getOrdersSummaryData().total;

  return (
    <DashboardElement>
      <h2>Total Expenses</h2>
      <p className={classes.expenses}>${totalExpenses.toFixed(2)}</p>
    </DashboardElement>
  );
}

export default TotalExpenses;
