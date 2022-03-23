import { useState } from 'react';

// "{}" es un objeto vacio    -   "[]" es un array vacio
// "initialState = {}" significa que si llega un argumento "initialState" como parametro de la funcion, se usa ese, sino, se usa un objeto vacio "{}"
export const useUserForm = (initialState = {}) => {

    const [form, setForm] = useState(initialState);

    const handleChanges = ({ target }) => {
        const { name, value } = target;
         setForm({
            // "...form" mantiene la información original del form, para despues agregarle el "[name]: value" nuevo al objeto
            ...form,
            [name]: value,
        })
    }

    // devuelve un objeto "{}" con 3 variables internas
    return {
        form, setForm, handleChanges,
    }
}