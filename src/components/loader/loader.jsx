import { useState, useEffect } from 'react';
import './loader.less';

export const Loader = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let timer;
    if (percent < 100) {
      timer = setInterval(() => {
        setPercent((prevPercentComplete) => prevPercentComplete + 1);
      }, 100);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [percent]);

  return (
    <div className="loader">
      <div id="loader" className="loader__bar">
        <span
          className="loader__inner"
          style={{
            width: `${percent}%`,
          }}
        ></span>
      </div>
      <p className="loader__text">Loading {percent}%</p>
    </div>
  );
};
