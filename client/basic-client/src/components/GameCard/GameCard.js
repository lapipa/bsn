const styles = require('./style.scss')

const GameCard = ({ game }) => {
 return (
    <div className={'game-card'}>
      <h1>
        <img src={game.teams.home.logo} alt="Home Team Logo" />
        vs
        <img src={game.teams.away.logo} alt="Away Team Logo" />
      </h1>
      <h2>{game.teams.home.name} vs {game.teams.away.name}</h2>
      <p>Date: {game.date}</p>
      <p>Time: {game.time}</p>
    </div>
 );
};

export default GameCard;