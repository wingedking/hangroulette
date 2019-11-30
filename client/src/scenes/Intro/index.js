import React, { Component } from "react";
import SessionIdModel from '../../models/SessionId'
import Error            from './components/Error'
import FormSessionGet   from './components/FormSessionGet'
import FormSessionNew   from './components/FormSessionNew'

class Intro extends Component {
    constructor(props){
        super(props)
        const mdlSessionId = new SessionIdModel(this.props.cookies.get("sessionId"))
        
        this.state = {
            cookies: this.props.cookies,
            mdlSessionId: mdlSessionId,
        }    
    }

    handleSubmitNew = e => {
        e.preventDefault()
        this.props.history.push("/session")
    }

    handleSubmitSession = e => {
        e.preventDefault()
        const { mdlSessionId } = this.state
        this.props.cookies.set("sessionId", mdlSessionId.get())
        this.props.history.push(`/session`)
    }
    
    handleChangeSession = e => {
        const mdlNewSessionId = new SessionIdModel(e.target.value)
        this.setState({objSessionId: mdlNewSessionId})
    }

    render(){
        const { mdlSessionId }  = this.state
        const { error }         = mdlSessionId
        const sessionId         = mdlSessionId.get()

        return (
            <div>
                <FormSessionGet submitValue="Continue Game" sessionId={sessionId} onSubmit={this.handleSubmitSession} handleChangeSession={this.handleChangeSession}/>
                <FormSessionNew submitValue="New Game" onSubmit={this.handleSubmitNew} />
                <Error error={error.msg}/>
            </div>
        )
    }
}

export default Intro