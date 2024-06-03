import LatestOrders from './LatestOrders.jsx';
import TotalExpenses from './TotalExpenses.jsx';
import classes from './DashboardElements.module.css';

function DashboardElements() {
  return (
    <div className={classes.elements}>
      <TotalExpenses />
      <LatestOrders />
    </div>
  );
}

export default DashboardElements;
