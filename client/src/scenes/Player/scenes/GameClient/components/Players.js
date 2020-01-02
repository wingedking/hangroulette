import React from 'react'
import "../../../../../styles/Players.css"

const Player = (props) => {
    let player, turn, className
    
    if(props.you){
        className = "plyr-you flx algn-itms--cntr"
        player = (<React.Fragment>you</React.Fragment>)
    }
    else{
        className = "plyr flx algn-itms--cntr"
        player = (<React.Fragment>player{props.player}</React.Fragment>)
    }
    if(props.player === props.turn){
        turn = (<div className={"trn trn-styl-1 flx--mdl " + props.progress}>{props.seconds}</div>)
    }
    else{
        turn = (<div className={"trn trn-styl-1 flx--mdl " + props.progress}></div>)
    }
    return <li className={className}>{player}{turn}</li>
}

const generatePlayers = (player, players, turn, seconds) => {
    const list = []
    let classGuessTime = ""
    if(seconds > 7){
        classGuessTime = "prg-good"
    }
    else if (seconds > 3){
        classGuessTime = "prg-caution"
    }
    else {
        classGuessTime = "prg-bad"
    }
    
    for(let i = 0; i < players; i++){
        list.push(<Player   player={i + 1} 
                            you={i + 1 === player}
                            turn={turn} 
                            progress={classGuessTime} 
                            seconds={seconds} 
                            key={i}/>)
    }

    return list
}

const Players = (props) => <div className="plyrs-contnr plyrs-cntnr-styl-1 flx flt--rght algn-itms--cntr">
                                <ul className="plyrs-lst flx--row">
                                    {generatePlayers(props.player, props.players, props.turn, props.seconds)}
                                </ul>
                            </div>

export default Players