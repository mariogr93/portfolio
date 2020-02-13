import React from 'react';



const Universal = (props) => (

    <div>
        {
            props.map((element) => (<div>
                <p>{element.paragraph}</p>
                <img src={element.picture}/>
            </div>))
        }
    </div>

);

export default Universal;