import useFetch from 'react-fetch-hook'
export default function GameStats() {

 
    const {isLoading, data, error } = useFetch('http://localhost:8080/votingAllowed');

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
                <h6>Game Status</h6>
                <h6>Currently Voting: {data.toString()}</h6>
            </div>
        );
    }
  }
  