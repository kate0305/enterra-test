/* eslint-disable react/prop-types */
import { getArrForRenderRating } from '@/utils/get-arr-for-render-rating';
import './player-info.less';

export const PlayerInfo = ({ player }) => {
  const { name, avatar, balance, rating } = player;

  const starsArr = getArrForRenderRating(rating);

  return (
    <div className="player">
      <div className="player_data">
        <h2 className="player_name">{name}</h2>
        <div className="player_raiting">
          {starsArr.map(({ id, isColored }) => (
            <span
              key={id}
              className={isColored ? 'star star__colored' : 'star star__not-colored'}
            />
          ))}
        </div>
      </div>
      <img src={avatar} alt="player avatar" className="player_avatar" />
      <label className="player_balance" htmlFor="balance-btn">
        <input type="checkbox" id="balance-btn" className="balance-btn"></input>
        <div className="balance-btn__hide">
          <div className="balance-btn__before">
            <span className="balance-btn__icon" />
            <span className="balance-btn__text">Show balance</span>
          </div>
        </div>
        <span className="balance-btn_label">
          ${balance}
        </span>
      </label>
    </div>
  );
};
