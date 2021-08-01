import React, { useState, useEffect, useRef } from 'react';

export default function elem(props) {

    function Render(){
        return(
            <div className="grouping">
                <p>{props.data.data}</p>
                {props.img.filter((item)=>{
                    return item.category === props.data.data
                }).map(item => 
                    <img
                        key={item.src}
                        onClick={() => {props.addImageTag(props.data.data) }}
                        src={item.src}
                    />)}
            </div>
        )
    }

    return (
        <div className="container-image">
            {!props.grouping && (
                <React.Fragment>
                    <img
                        onClick={() => { props.addImageTag(props.data.category) }}
                        src={props.data.src}
                    />
                    <p>{props.data.name}</p>  
                </React.Fragment>
            )}
           {props.grouping && (
               <Render/>
           )}
        </div>
    )
}