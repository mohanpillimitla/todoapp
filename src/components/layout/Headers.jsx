import React from 'react';

function Header(){

     return (
         <header style={headerStyle}>

           <h1>TodoList</h1>

         </header>
     )

}

const headerStyle={
  background:'grey',

  color:'white',
  textAlign:'center',
  padding:'10px 5px',
  marginBottom:'40px'

}

export default Header;