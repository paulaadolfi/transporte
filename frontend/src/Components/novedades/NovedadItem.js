import React from 'react';
import "../../styles/components/Pages/NovedadesPage.css"

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;
    return (
        
            <div className= "novedades">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <div className='img_novedades'>
                    <img src={imagen} />
                </div>
                <p><div dangerouslySetInnerHTML={{__html: body}}/></p>
                
                <hr/>
            </div>
         
    );
}

export default NovedadItem;