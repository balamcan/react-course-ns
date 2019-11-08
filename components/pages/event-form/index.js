import React, { Component} from 'react';
import { getEvent } from '../../../services/events';
import {  postAtendee } from '../../../services/atendees';
import { ECONNABORTED } from 'constants';

class EventForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            event:{},
            name:"",
            email:"",
            tshirt_size:"",
            company:"",
            message_form:"",
        };
    }

    componentDidMount() {
        getEvent(this.props.match.params.id)
        .then(response => {
            // console.log(response)
            this.setState({
                event:{...response.data.data},
            })
        })
    }
    inputHandlerChange(evt){
        // let newValue = Object.assign({}, this.state.suscriber);
        let field = evt.target.name
        let new_value =evt.target.value;
        this.setState( {[field]:new_value })
    }
    submitForm(evt){
        let newAtendee={
            name:this.state.name,
            email:this.state.email,
            tshirt_size:this.state.tshirt_size,
            // company:this.state.company,
            
        }
        let wem =postAtendee(newAtendee).then(response => {

            console.log("response")
            this.setState({message_form:"Se inscribió correctamente"})
        })
        .catch((e)=>{
            console.log(e)
            this.setState({message_form:"Hubo un error favor de intentar de nuevo"})

        })
        console.log('foo');

        console.log(wem)
    }
    
    render() {
        const {event, name, email, tshirt_size, company, message_form} = this.state;
        return (
            <div>
                <h2> {event.name} </h2>
                <p> {event.description} </p>        
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={name} name="name" onChange={evt=>this.inputHandlerChange(evt)} />   
                </div>
                <div>
                    <label>Correo electrónico</label>
                    <input type="text" value={email} name="email" onChange={evt=>this.inputHandlerChange(evt)} />   
                </div>
                <div>
                    <label>Talla de playera</label>
                    <input type="text" value={tshirt_size} name="tshirt_size" onChange={evt=>this.inputHandlerChange(evt)} />   
                </div>
                <div>
                    <label>Empresa</label>
                    <input type="text" value={company} name="company" onChange={evt=>this.inputHandlerChange(evt)} />  
                </div>
                <div>
                    <input type="button" onClick={(evt)=>this.submitForm(evt)} value="Registar"/>
                    <b>{message_form}</b>
                </div>
            </div>
        );
    }
}


export default EventForm;