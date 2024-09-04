/* eslint-disable react/prop-types */
import './tournament-item.less';

export const TournamentItem = ({ tournament, selectedTournament, handleSelect }) => {
  const { id, isCanRegister, isPin, type, tags, title, isColorTitle, date, players, tourney } =
    tournament;

  const titleColorClassName =
    isCanRegister && isColorTitle ? 'tournament_title__green' : 'tournament_title__yellow';
  return (
    <li
      className={selectedTournament === id ? 'tournament tournament__selected' : 'tournament'}
      onClick={handleSelect}
    >
      <p
        className={
          isCanRegister ? 'tournament_label' : 'tournament_label tournament_label__disable'
        }
      >
        {isCanRegister ? 'Registering' : 'Canceled'}
      </p>
      <div className="tournament_container" role="button">
        <div className="tournament_data">
          <div className="tournament_main-info">
            <ul className="tournament_tags">
              {isPin && <li className="tournament_tag pin" />}
              <li className="tournament_type">{type}</li>
              {tags.map((tag) => (
                <li key={tag} className={`tournament_tag ${tag}`} />
              ))}
            </ul>
            <h3 className={`tournament_title ${isColorTitle ? titleColorClassName : ''}`}>
              {title}
            </h3>
          </div>
          <button className="primary-btn" disabled={!isCanRegister}>
            {isCanRegister ? 'Join table' : 'Canceled'}
          </button>
        </div>
        <div className="tournament_info">
          <time dateTime={date} className="tournament_date">
            {date}
          </time>
          <div className="tournament_stats">
            <p className="tournament_players">{players}</p>
            <p className="tournament_tourney">{tourney}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
