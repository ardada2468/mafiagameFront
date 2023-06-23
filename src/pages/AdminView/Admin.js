import { useEffect, useState } from 'react';
import useFetch from 'react-fetch-hook'
import GameStats from '../../components/Gamestats';
import { useNavigate } from "react-router-dom";

import { json } from 'react-router-dom';
// import "./allplayer.css"
export default function AdminView() {
    const navigate = useNavigate();


    function handledelete(id){
        // e.preventDefault();
        console.log(id)

        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          fetch("http://localhost:8080/Delete/"+id, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        
        window.location.reload(false);

    }

    
    function handleStartGame(){
        // e.preventDefault();
       
        var requestOptions = {
            method: 'PATCH',
            redirect: 'follow'
          };
          
          fetch("http://localhost:8080/votingAllowed", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        
        window.location.reload(false);

    }


    

    const {isLoading, data, error } = useFetch('http://localhost:8080/allPlayers');
    // const {isLoadingVoting, isVotingAllowed, error2 } = useFetch('http://localhost:8080/votingAllowed');
    
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
        const jsonobj = JSON.parse(localStorage.getItem('player'))
        const id = jsonobj.id;
        console.log(id)
        if (id === 1){

        console.log(data)

  
        return (
            <div>
                <h1>All Players</h1>

                <div>
                <GameStats/>

                </div>

                <table className='tableborder'>
                    <tr>
                        <th>Name</th>
                        <th>Votes</th>
                        <th>hasVoted</th>
                        <th>Delete</th>

                    </tr>
                {data.map(player => (
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.votes}</td>
                        <td>{player.hasVoted.toString()}</td>
                        <td>
                            <button onClick={() => handledelete(player.id)}>Delete</button>
                        </td>

                    </tr>
                ))}
                </table>
                <button onClick={() => window.location.reload(false)}>Click to reload!</button>
                <button onClick={() => handleStartGame()}>Start Game</button>

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
  