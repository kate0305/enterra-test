/* eslint-disable react/prop-types */
import { useState } from 'react';
import { PlayerInfo } from '@/components/player-info';
import { TournamentItem } from '@/components/tournament-item';
import { Spinner } from './components/spinner';
import { Loader } from './components/loader';
import { tournamentsData, userData } from '@/utils/data';
import { DEFAULT_TOURNAMENT_NUMBER } from '@/utils/consts';
import './App.less';

function App() {
  const [selectedTournament, setSelectedTournament] = useState(DEFAULT_TOURNAMENT_NUMBER);

  return (
    <div className="wrapper">
      <h1 className="app_title">Poker</h1>
      <Spinner />
      <PlayerInfo player={userData} />
      <Loader />
      <ul className="app_list">
        {tournamentsData.map((tournament) => {
          const handleSelect = () => setSelectedTournament(tournament.id);
          return (
            <TournamentItem
              key={tournament.id}
              tournament={tournament}
              selectedTournament={selectedTournament}
              handleSelect={handleSelect}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
