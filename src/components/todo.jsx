
import React ,{ Component } from 'react';
import TodoItem from './todo-item';

import propTypes from 'prop-types'

class Todos extends Component{


    render(){


        return this.props.todos.map((todo)=>(

        

        
        <div  className='col-lg-4' key={todo.id} >
        <div className="alert alert-secondary" style={{minHeight:200}}>
               <TodoItem key={todo.id} todoitem={todo}
                markCompleted={this.props.markCompleted}
        
                delTodo={this.props.delTodo}/>

         </div>
         </div>

        ))


    }
  


}

Todos.propTypes={

    todos:propTypes.array.isRequired
}

export default Todos;
