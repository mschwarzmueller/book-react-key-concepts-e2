import { getOrdersSummaryData } from '../../data/orders.js';
import DashboardElement from './DashboardElement.jsx';
import classes from './TotalExpenses.module.css';

function TotalExpenses() {
  const totalExpenses = getOrdersSummaryData().total;
  const formattedTotalExpenses = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(totalExpenses);

  return (
    <DashboardElement>
      <h2>Total Expenses</h2>
      <p className={classes.expenses}>{formattedTotalExpenses}</p>
    </DashboardElement>
  );
}

export default TotalExpenses;
