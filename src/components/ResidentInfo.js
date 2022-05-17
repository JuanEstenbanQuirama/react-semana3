import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResidentInfo = ({ residentNum }) => {

    const [residentAll, setResidentAll] = useState({})

    useEffect(() => {
        axios.get(residentNum)
            .then(res => setResidentAll(res.data))
    }, [residentNum])

    
    console.log(residentAll)
    return (
        <li className='cards'>
            <img src={residentAll.image} alt="" />
            <div className='info'> 
                <h2>{residentAll.name}</h2>
                <p>{`${residentAll.status} - ${residentAll.species}`}</p>
                <p> <small>Origin: </small>{residentAll.origin?.name}</p>
                <p><small> Episodes where appear: </small>{residentAll.episode?.length}</p>
            </div>
        </li>
        
    );
};

export default ResidentInfo;