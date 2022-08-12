import LatestOrders from './LatestOrders';
import TotalExpenses from './TotalExpenses';
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
