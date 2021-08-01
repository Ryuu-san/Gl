import React, { useState, useEffect, useRef } from 'react';
import Elem from './elem.jsx'

export default function RenderImg(props:any){
    function Render(){
        return(
            <div>
                {props.grouping && (
                    props.allTag.map(item => <Elem key={item.id} data={item} addImageTag={props.addImageTag} img={props.imgArr} grouping={props.grouping}/>)
                )}
                {!props.grouping &&(
                    props.imgArr.map(item => <Elem key={item.id} data={item} addImageTag={props.addImageTag} grouping={props.grouping}/>)
                )}
            </div>
        )
    }
    return(
        <div className="container-image">
            <Render/>
        </div>
    )
}