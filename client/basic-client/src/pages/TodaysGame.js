import React, { useState, useEffect } from 'react';
import GameCard from '../components/GameCard'; // Adjust the import path as necessary

const TodaysGame = () => {
 const [games, setGames] = useState([]);

 useEffect(() => {
    fetch('http://myapi/getGames')
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error('Error fetching data: ', error));
 }, []);

 return (
    <div>
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
 );
};

export default TodaysGame;