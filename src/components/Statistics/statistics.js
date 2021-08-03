import PropTypes from 'prop-types';
import Notification from '../Notification/notification';
import s from './statistics.module.css';

const Statistics  = ({stats:[good, bad, neutral]}) => {

const total = bad+neutral+good;
const positive = Math.round((good/(bad+neutral+good)*100))
  return (
  <>
   {!total ? (
      <Notification />
      ) : (
    <div className = {s.stats}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positive}%</p> 
    </div>
      )}
  </>
  )}

export default  Statistics;

Statistics.propTypes = {
  stats:PropTypes.array
};
