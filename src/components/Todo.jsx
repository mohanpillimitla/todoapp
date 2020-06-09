import React ,{ Component } from 'react';
import TodoItem from './todo-item';

import propTypes from 'prop-types'

class Todos extends Component{


    render(){


        return this.props.todos.map((todo)=>(

        <TodoItem key={todo.id} todoitem={todo}
        markCompleted={this.props.markCompleted}
        
        delTodo={this.props.delTodo}/>



        ))


    }
  


}

Todos.propTypes={

    todos:propTypes.array.isRequired
}

export default Todos;