import { useEffect, useState } from 'react';
import useFetch from 'react-fetch-hook'
import GameStats from '../../components/Gamestats';
import { useNavigate } from "react-router-dom";

import { json } from 'react-router-dom';
// import "./allplayer.css"
export default function GameUI() {
    const navigate = useNavigate();



    
    function handlevoting(e){
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        console.log("formadata: ", formJson.player-1)
        var requestOptions = {
            method: 'PATCH',
            redirect: 'follow'
          };
          
          fetch("http://localhost:8080/player/"+(formJson.player-1), requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

            var requestOptions2 = {
                method: 'PATCH',
                redirect: 'follow'
              };
              
              fetch("http://localhost:8080/hasVoted/"+localStorage.getItem('player').id, requestOptions2)
                .then(response => response.text())
                
        navigate('/admin')

    }


    

    const {isLoading, data, error } = useFetch('http://localhost:8080/allPlayers');


    // let load = isLoading && isLoadingVoting;

    // const jsonobj = JSON.parse(localStorage.getItem('player'))
    // const id = jsonobj.id;
    // console.log(id)
    if (isLoading){
        return(
            <div>
                <h1>
                    Loading
                </h1>
            </div>
        )
    }else{

        // localStorage.setItem('player', data[localStorage.getItem('player').id])
        const jsonobj = JSON.parse(localStorage.getItem('player'))
        const voteAllowed = jsonobj.voteAllowed;
        const hasVoted = jsonobj.hasVoted;
        console.log({voteAllowed, hasVoted})

        const cando = voteAllowed && !hasVoted;

        if (true){

        console.log(data)

  
        return (
            <div>
                <h1>All Players</h1>

                <div>
                <GameStats/>

                </div>

            <form onSubmit={handlevoting}>
                <p>
                {data.map(player => (
                    //type='radio' name="player" value={player.id}>{player.name}
                    <label>
                        {player.name}
                         <input type='radio' name='player' value={player.id} />
                         <br></br>
                    </label>
                    // <tr>
                    //     <td>{player.name}</td>
                    //     <td>{player.votes}</td>
                    //     <td>{player.hasVoted.toString()}</td>
                    //     <td>
                    //         <button onClick={() => handledelete(player.id)}>Delete</button>
                    //     </td>

                    // </tr>
                ))}
                </p>
                <button type='sumbit'>Finish Voting</button>
            </form>
            <button onClick={() => window.location.reload(false)}>Click to reload!</button>

            </div>
        );
     }else{
        console.log(JSON.parse(localStorage.getItem('player')).id === 0)
        navigate("/")
        return(

            <div>
                <h1>Not Authorized</h1>
            </div>
        )
    }
  }
}
  