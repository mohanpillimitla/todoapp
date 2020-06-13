import React, { Component } from 'react';

import Todos from './components/todo';
import './App.css';
import AddTodo from './components/AddTodo';


import axios from 'axios';




import Header from './components/layout/Headers';

class App extends Component {
  state={

  todos:[]

 
  }

  componentDidMount(){
    axios.get('https://still-mesa-20147.herokuapp.com/api/todos/').then(res=>
    
    this.setState({todos:res.data}));

    



  }

  markCompleted =(todoitem) =>{


    


     
      this.setState({todos: this.state.todos.map(todo =>{


        if(todo.id === todoitem.id){

           todo.iscompleted=!todo.iscompleted


        }


      
      return todo; 

      })


      });
      

      axios.put(
       
        `https://still-mesa-20147.herokuapp.com/api/todos/${todoitem.id}/`,todoitem
        
        
        ).then(res=>console.log(res.data))
      


    



  }

  delTodo =(id)=> {

    axios.delete(
      
      
      `https://still-mesa-20147.herokuapp.com/api/todos/${id}`
      
      
      )
    .then(res=>this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]}))


  }
    














  addTodo= (title)=>{
    axios.post('https://still-mesa-20147.herokuapp.com/api/todos/',{
    title:title,
  
    iscompleted:false

    }).
    then(res=> this.setState({todos:[...this.state.todos,res.data]})
    );




  }





  render() {
    return (
      <div className="App">
                <Header/>

        <div className="container">
        
        <AddTodo addtodo={this.addTodo}/>
        <div className="row">
        <Todos todos={this.state.todos}
        markCompleted={this.markCompleted}

        delTodo={this.delTodo}
        
        />
        </div>
        
        

      </div>
      </div>
    );
  }
}

export default App;
