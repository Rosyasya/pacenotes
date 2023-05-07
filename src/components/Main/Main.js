import React from "react";

const Main = ( { title, description } ) => {
    return (
        <div className='main_wrapper'>
            <div className="main_container">
                <h1>{title}</h1>
                <h2>{description}</h2>
            </div>
        </div>
    );
};

export default Main;