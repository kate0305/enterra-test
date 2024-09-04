import { AMOUNT_CIRCLES_IN_SPINNER } from '@/utils/consts';
import './spinner.less';

export const Spinner = () => {
  const arrCircles = Array.from({ length: AMOUNT_CIRCLES_IN_SPINNER }, (_, i) => ({
    id: i,
  }));

  return (
    <div className="spinner">
      {arrCircles.map(({ id }) => (
        <span key={id} className={`spinner_circle spinner_circle__${id + 1}`}></span>
      ))}
    </div>
  );
};
