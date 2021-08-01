import React, { useState, useEffect, useRef } from 'react';

export default function Add(props:any){
    const [randomTag, setRandomTag]:any = useState(['cat', 'dog', 'rabbit', 'bird', 'home', 'daddy', 'spawn', 'money', 'dollars', 'gold', 'almaz', 'girl', 'boy', 'man', 'woman', 'potato', 'love'])
    const [tag, setTag]:any = useState('')
    const [download, setDownload]:any = useState(false)
    const [emptyField, setEmptyField]:any = useState(false)
    const [result, setResult]:any = useState('')

    function validate(): void{
        if(tag === ''){
            setEmptyField(true)
        }else{
            setEmptyField(false)
            saveUser()
        }
    }

    useEffect(()=>{
        console.log(props.imgTag)
        setTag(props.imgTag)
    },[props.imgTag])

    function arrayRandElement(arr:any) {
        let rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }

    async function saveUser(){
        setDownload(true)
        let b = arrayRandElement(randomTag)
        console.log(tag === 'delay'? b: tag)
        let response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=734IUNdkjhegJv4cieuIIdZqrpAtCI0f&tag=' + (tag === 'delay'? b: tag), {
          method: 'GET',
        });
        
        let result = await response.json();
        setDownload(false)
        setResult(result.data.image_url)
        if(result.data.image_url !== undefined){
            props.addImage(result.data.image_url, tag)
        }
    }

    function saveTag(tag: string) :void{
        if(tag.match(/[А-Яа-я]|[0-9]|[-!$%^&*()_+|~=`\\#{}\[\]:";'<>?.@\/]/g) === null){
            setTag(tag)
        }
    }

    function downloadImage(){
        let a:any = props.allTag.filter((item:any)=>{
            return item.data === tag
        })
        if(a.length === 0){
            props.addTag(tag)
        }
        validate()
    }


    return(
        <div className="panel-control">
            <div>
                <input type="text" placeholder="Введите тег" value={tag} onChange={(event)=>{saveTag(event.target.value)}}/>
                <button onClick={()=>{downloadImage()}} disabled={download} className={download? 'disabled' : ''}>{download? 'Загрузка...' : 'Загрузить'}</button>
                <button onClick={()=>{props.remove(), setTag('')}}>Очистить</button>
                <button onClick={()=>{props.groupingImg()}}>{props.grouping? 'Разгруппировать' : 'Группировать'}</button>
            </div>
            <div className="panel-control__errors">
                {emptyField && (
                    <p>Заполните поле!</p>
                )}
                {result === undefined && (
                    <p>По тегу ничего не найдено</p>
                )}
            </div>
        </div>
    )
}