import React ,{ Component } from 'react';
import propTypes from 'prop-types'


class TodoItem extends Component{

    getStyle =() => {

        return {
            background:'grey',
            padding:'10px',

            borderBottom:'1px solid #ccc',
            textDecoration:this.props.todoitem.completed ?
             'line-through' : 'none'
        }

       const btnStyle={

    background:'red',
    color:'blue',
    padding:'5px 9px',

    borderRadius:'50%',
    float:'right',





}
       }

       



   

    render(){
        const { id,title }=this.props.todoitem;
        const btnStyle={

            background:'red',
            color:'blue',
            padding:'5px 9px',
        
            borderRadius:'50%',
            float:'right',
        
        
        
        
        
        }
        
        
        

      return (
          <div style={this.getStyle()}>

              

              <p>

              <input type="checkbox" onChange={this.props.markCompleted.bind(this,id)}/>


                  {title}

              <button onClick={()=>this.props.delTodo(id)}
              
              
              style={btnStyle}>x</button>
               </p>
        
        </div>


        )


    }

    
  


}

TodoItem.propTypes={

    todoitem:propTypes.object.isRequired
}




export default TodoItem;