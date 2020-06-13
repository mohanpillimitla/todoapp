import React ,{ Component } from 'react';
import propTypes from 'prop-types'


class TodoItem extends Component{

    getStyle =() => {

        return {
            
            marginBottom:40,

            

            
            textDecoration:this.props.todoitem.iscompleted ?
             'line-through' : 'none',
             background:'white',
             padding:10,
        }

      
       }

       



   

    render(){
        const { id,title }=this.props.todoitem;
      
        
        

      return (
          <div  className="row">
        <div className="col-12" style={this.getStyle()}>

                <p>Todo:{title}</p>

        
            </div>
            <div className="col-6" >


            <button type="button" onClick={()=>this.props.markCompleted(this.props.todoitem)}

              className="badge badge-info form-control">Check
              
              
              </button>
              </div>
            <div className="col-6">


            <button type="button" onClick={()=>this.props.delTodo(id)}

              className="badge badge-danger form-control"
              
              
              >
                  delete
              </button>
                    

            



             
              </div>
              
        
        
               
        
        </div>


        )


    }

              
    
  


}

TodoItem.propTypes={

    todoitem:propTypes.object.isRequired
}




export default TodoItem;