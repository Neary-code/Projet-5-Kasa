import React from 'react';

const Collapsible =()=>{
    return (
        <div className="Collapses">
            <Collapsible label="Fiabilité" />
            <hr />
            <Collapsible label="Respect" />
            <hr />
            <Collapsible label="Service " />
            <hr />
            <Collapsible label="Sécurité" />
        </div>
        );
}
export default Collapsible;