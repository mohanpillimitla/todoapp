import React, { Component } from 'react';

import Todos from './components/Todo';
import './App.css';
import AddTodo from './components/AddTodo';


import axios from 'axios';




import Header from './components/layout/Headers';

class App extends Component {
  state={

  todos:[]

 
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>this.setState({todos:res.data}));




  }

  markCompleted =(id) =>{
    
      this.setState({todos: this.state.todos.map(todo =>{


        if(todo.id === id){

           todo.completed=!todo.completed


        }










      
      return todo; 

      })

      });


    



  }

  delTodo =(id)=> {

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>this.setState({
      todos:[...this.state.todos.filter(todo=>todo.id!==id)]
    
    },
  

    
    )
    
    
    );












  }

  addTodo= (title)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos',{
    title:title,
    completed:false

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
        <Todos todos={this.state.todos}
        markCompleted={this.markCompleted}

        delTodo={this.delTodo}
        
        />
        

      </div>
      </div>
    );
  }
}

export default App;
