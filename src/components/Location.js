import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';

const Location = () => {

    const [ locationRick, setLocationRick] = useState({})

    const [id, setId] = useState("")

    // con el arreglo de dependencias, para que al ppio de active una vez, (cuando se carga la pag)
    useEffect (() => {
        const random = Math.floor(Math.random() * 126) +1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}/`)
            .then(res => setLocationRick(res.data))
    }, []);
    // el input
   const searchInfo = () => {
       console.log(id)
       if(id<=126){
           axios.get(`https://rickandmortyapi.com/api/location/${id}/`)
           .then(res => setLocationRick(res.data))
        }else{
            alert("We only have 126 locations to show")
        }

   }
   console.log(locationRick)
    return (
        <div className='container-input'>
            <div className='input'>
                <input 
                    type="text" 
                    onChange={e => setId(e.target.value)}
                    value={id}
                    placeholder='Type location id'   
                    />
                <button onClick={searchInfo}>Search</button>
            </div>
            <div className='location'> 
                <h1>{locationRick.name}</h1>
                <p><b>type : </b>{locationRick.type}</p>
                <p><b>Dimension : </b>{locationRick.dimension}</p>
                <p><b>Residents : </b>{locationRick.residents?.length}</p>
            </div>
            <ul>
                {locationRick.residents?.map(resident => (
                    <ResidentInfo residentNum = {resident} key = {resident} />
                    ))}
            </ul>
        </div>
    );
};

export default Location;