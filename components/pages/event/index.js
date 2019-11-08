import React from 'react';

const Event = (props) => {
    const {event} = props;

    return (
        <div>
            {
                event.thumbnail_url && 
                <img src={event.thumbnail_url} />
            }
            <h2> {event.name} </h2>
            <p> {event.description} </p>
            <a href={'#/events/'+event.id}>Inscribirse</a>
        </div>
    );
}

export default Event;