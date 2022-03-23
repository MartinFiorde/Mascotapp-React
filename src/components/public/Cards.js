import React, { useEffect, useState } from 'react'
import RaMService from '../../services/RaM.service';
import { Card } from './Card';

// export const Cards = ({ mascotas }) => {
export const Cards = () => {

    const [mascotas, setMascotas] = useState([]);

    // Hook "useEffect" se encarga de escuchar activamente lo que pasa en el componente para hacer lo que se le parametrice
    useEffect(() => {
        RaMService.getAllCharacters()
            .then((data) => setMascotas(data.results))
            .catch((error) => console.log(error))
    }, [mascotas])

    const cardList = mascotas.map((m) => <Card mascota={m} key={m.id} />)

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                    {cardList}
                    {/*                 
                    // FORMA "MANUAL" DE MOSTRAR 6 CARTAS:
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card /> 
                    */}
                </div>
            </div>
        </div>
    )
}