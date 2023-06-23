import { useEffect, useState } from 'react';
import useFetch from 'react-fetch-hook'
import "./allplayer.css"
export default function AllPlayer() {

    const {isLoading, data, error } = useFetch('http://localhost:8080/allPlayers');


    if (isLoading){
        return(
            <div>
                <h1>
                    Loading
                </h1>
            </div>
        )
    }else{
        console.log(data)

  
        return (
            <div>
                <h1>All Players</h1>
                <table className='tableborder'>
                    <tr>
                        <th>Name</th>
                        <th>Votes</th>
                    </tr>
                {data.map(player => (
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.votes}</td>
                    </tr>
                ))}
                </table>
                <button onClick={() => window.location.reload(false)}>Click to reload!</button>
            </div>
        );
    }
  }
  