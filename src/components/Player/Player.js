import React from 'react';
import './Player.css';

const Player = ({player, cart, setCart}) => {
    console.log(cart);
    const { strSportThumb, strFormat, strSportDescription } = player;
    console.log(player)
    
    const handleToCart = (info) =>{
        const singleTeam = cart.find(p=>p.idSport === info.idSport);
        if(!singleTeam){
        setCart([...cart, info]);
        }
        
        // const info = {
        //     strFormat,
        //     name: 'Forhad'
        // };
        
    }
    // console.log(player);
    
    return (
        <div className='player'>
           <img src={strSportThumb} alt="" />
           <h3> {strFormat}</h3>
           <p className='alignment'>{strSportDescription.slice(0, 200)}.......!!</p>
           <button onClick={()=>handleToCart(player)} className='btn-cart'>Add To Cart</button> 
        </div>
    );
};

export default Player;