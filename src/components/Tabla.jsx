import React, { useState } from 'react'
import TableRow from './TableRow'

const Tabla = ({ usuarios, palabra }) => {
  
  let results = [];
  if (!palabra) {
    results = usuarios;
  } else {
    results = usuarios.filter(
      (user) =>
        user.nombre.toLowerCase().includes(palabra.toLowerCase()) ||
        user.correo.toLowerCase().includes(palabra.toLowerCase())
    );
    
  }
  
  
return (
    <div>
        <h2>Lista de colaboradores</h2>

<table className='table table-striped table-hover mt-5 shadow-lg'>
    <thead className='bg-success text-white'>
    <tr>
      <th>Nombre</th>
      <th>Email</th>
    </tr>
    </thead>
    <tbody>
    {results.length > 0 ? (
            results.map((user) => <TableRow key={user.id} user={user} />)
          ) : (
            <tr>
              <td>No hay resultados</td>
            </tr>
          )}
    </tbody>

</table>

    </div>
  )
}

export default Tabla