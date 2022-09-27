import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Players from '../Players/Players';
import './Home.css';

const Home = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
          .then((res) => res.json())
          .then((data) => setPlayers(data.sports));
    }, [])



    return (
      <div className="home">
        <div className="players-container">
          <h1>Player ............</h1>
          <Players players={players} cart={cart} setCart={setCart}></Players>
        </div>
        <div className="players-cart">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    );
};

export default Home;