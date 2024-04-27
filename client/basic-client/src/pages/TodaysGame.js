import React, { useState, useEffect } from 'react';
import GameCard from '../components/GameCard/GameCard'; // Adjust the import path as necessary

const TodaysGame = () => {
 const [games, setGames] = useState([]);

 useEffect(() => {
    fetch('http://localhost:8080/api/getGamesByDate?date=' + (new Date().toISOString().slice(0,10)))
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error('Error fetching data: ', error));
 }, []);
 console.log(games)
 return (
    <div>
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
 );
};

export default TodaysGame;