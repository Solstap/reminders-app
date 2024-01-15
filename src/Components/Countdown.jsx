import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import CircularProgressWithLabel from "./MuiComponents/CircularProgressWithLabel";


const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = useCallback(() => {
      const currentDate = new Date();
      const targetDateObj = new Date(targetDate);
  
      // set the target year to the current year
      targetDateObj.setFullYear(currentDate.getFullYear());
  
      // check if the target date has already occurred in the current year
      if (currentDate > targetDateObj) {
        targetDateObj.setFullYear(currentDate.getFullYear() + 1); // move to the next year if the date has already passed
      }
  
      const difference = targetDateObj - currentDate;
      const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
  
      return daysLeft;
  
    }, [targetDate]);
  
    const [daysLeft, setDaysLeft] = useState(calculateTimeLeft);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setDaysLeft(calculateTimeLeft);
      }, 24 * 60 * 60 * 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, [targetDate, calculateTimeLeft]);
  
    const progress = ((365 - daysLeft) / 365) * 100;
  
    return (
      <div>
        <CircularProgressWithLabel value={progress} daysLeft={daysLeft} />
      </div>
    );
  };
  
  Countdown.propTypes = {
    targetDate: PropTypes.string.isRequired,
  };
  
  export default Countdown;