import SessionIdModel from './SessionId'
import Error from "../services/error"

class SessionModel {
    constructor(sessionIdObj, wins, losses, gameObj){
        /* ENCAPSULATED CLASS FUNCTION SETUP */
        /*************************************/
        win = () => {
            _wins += 1
            return this
        }

        loose = () => {
            _losses += 1
            return this
        }

        getWin = () => {
            return _wins
        }

        getLosses = () => {
            return _losses
        }

        getSessionIdObj = () => {
            return _sessionIdObj
        }

        getGameObj = () => {
            return _gameObj
        }
        
        validPositiveNumber = (number) => {
            this.error.clear()
            if(typeof(number) !== "number"){
                this.error.set("not a number")
            }
            else if(number < 0){
                this.error.set("number must be positive")
            }

            return this
        }

        validateConstructorArguements = (sessionIdObj, wins, losses, gameObj) => {
            this.error.clear()
            if(!(sessionIdObj instanceof SessionIdModel)){
                this.error.set("sessionIdObj must be an instace of SessionIdModel")
                return this
            }
    
            if(!(gameObj instanceof gameObj)){
                this.error.set("gameObj must be an instance of GameModel")
                return this
            }
    
            if(this.validPositiveNumber(wins).error.msg){
                this.error.add(": wins")
                return this
            }
    
            if(this.validPositiveNumber(losses).error.msg){
                this.error.add(": losses")
                return this
            }
            return this
        }
        /* MAIN CONSTRUCTOR CODE */
        /*************************/
        /* constructor must be initiated with all parameters met */
        
        this.error = Error()

        if (this.validateConstructorArguements(sessionIdObj, wins, losses, gameObj).error.msg){
            return this
        }

        let _wins = wins
        let _losses = losses
        let _sessionIdObj = sessionIdObj
        let _gameObj = gameObj
    }
}