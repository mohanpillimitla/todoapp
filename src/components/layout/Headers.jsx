import React from 'react';

function Header(){

     return (
         <header style={headerStyle}>

           <h1>TodoList</h1>

         </header>
     )

}

const headerStyle={
  background:'#333',

  color:'blue',
  textAlign:'center',
  padding:'10px 5px',

}

export default Header;