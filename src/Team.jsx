import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);

    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemove = () => {
        setTeam(team - 1);
    }

    const teamStyle = {
        margin: '20px',
        padding: '20px',
        border: '3px solid gold',
        borderRadius: '10px',
        background: 'lightgray'
    }
    return (
        <div style={teamStyle}>
            <h3 className="player">Players: <span>{team}</span> </h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleRemove}>remove</button>
        </div>
    )
}