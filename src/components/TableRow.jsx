import React from 'react'

const TableRow = ({user}) => {
  
const {nombre, correo } = user
  
    return (
   
        <tr>
            <td>{nombre}</td>
            <td>{correo}</td>
        </tr>
  
  );
};

export default TableRow