import React, { useState } from "react"
import Error from './Error'
import {getId} from '../helpers/getId'

const Formulario = ({usuarios, setUsuarios}) => {
const [nombre, setNombre] = useState('')
const [correo, setCorreo] = useState('')
const [error, setError] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault();

//Validamos los datos
if ([nombre, correo].includes("")){
  setError(true)
  return
}

setError(false)
//guardo como objeto
const objetoUsuario ={
nombre,
correo,
id: getId(),
}

//Guarda los valores
setUsuarios([...usuarios, objetoUsuario])
//Setear input

setNombre('')
setCorreo('')


 };
  return (
    <div>
       <h2>Agregar Colaboradores</h2>



<form onSubmit={handleSubmit}>
{error && <Error message='Todos los datos son obligatorios' /> }
<div className='mb-3'>
    <label htmlFor="nombre">Nombre:</label>
    <input 
    className='form-control w-50'  
    type="text" 
    value={nombre} 
    onChange={e=>setNombre(e.target.value)}
    />
</div>
<div className='mb-3'>
    <label htmlFor="correo">Correo:</label>
    <input 
    className='form-control w-50'  
    type="email"  
    value={correo} 
    onChange={e=>setCorreo(e.target.value)}
    />
</div>
<button className='btn btn-success'>Agregar</button>

</form>
    
    
    </div>
  )
}

export default Formulario