import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Control from '../components/control.tsx'
import RenderImg from '../components/render_img.tsx'

export default function App(){
    const [imgArr, setImgArr] = useState([])
    const [imgTag, setImgTag] = useState('')
    const [grouping, setGrouping] = useState(false)
    const [allTag, setAllTag] = useState([])
    let [id, setId] = useState(1)

    function addImageTag(tag){
        setImgTag(tag)
    }

    function remove(){
        setImgArr([])
        setImgTag('')
        setAllTag([])
    }

    function addImage(src, categ){
        setImgArr([...imgArr, {src, id:id, category: categ}])
        setId(id += 1)
    }

    function groupingImg(){
        setGrouping(!grouping)
    }

    function addTag(data){
        setAllTag([...allTag, {data, id:id}])
        setId(id += 1)
    }

    return (
        <React.Fragment>
            <Control 
                addImage={addImage} 
                imgTag={imgTag} 
                remove={remove}
                groupingImg={groupingImg}
                grouping={grouping}
                addTag={addTag}
                allTag={allTag}
            />
            {imgArr.length !== 0 && (
                <RenderImg 
                    imgArr={imgArr} 
                    addImageTag={addImageTag}
                    grouping={grouping}
                    allTag={allTag}
                />
            )}
        </React.Fragment>
    )
}