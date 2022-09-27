import React from 'react';
import Player from '../Player/Player';
import './Players.css';

const Players = ({players, cart, setCart}) => {
    // console.log(cart);
    console.log(players)
    return (
        <div className='player-container'>
            {
                players.map(player => <Player 
                    player={player} 
                    key={player.idSport}
                    cart={cart}
                    setCart={setCart}
                    ></Player>)
            }
        </div>
    );
};

export default Players;