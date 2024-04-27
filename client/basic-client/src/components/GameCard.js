const GameCard = ({ game }) => {
    return (
       <div className="game-card">
         <h2>{game.team1} vs {game.team2}</h2>
         <p>Date: {game.date}</p>
         <p>Time: {game.time}</p>
         {/* Add more details as needed */}
       </div>
    );
   };

export default GameCard