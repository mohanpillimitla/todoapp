import React ,{ Component } from 'react';

class  AddTodo extends Component{

    state={

        title:''
    }

    onChange=(e)=>{this.setState({[e.target.name]:e.target.value})}

    onSubmit=(e)=> {

        e.preventDefault();
        this.props.addtodo(this.state.title);
        this.setState({title:''})




    }

  render(){

    return (
      <div className="alert alert-info" style={{marginBotton:40}}>
       <form onSubmit={this.onSubmit}
       style={{display:'flex'}}>
      
        
           <input type="text" className="form-control"
           value={this.state.title}
           onChange={this.onChange} name="title" 
           
           style={{flex:'6'}}

        
           
           placeholder='ADD Todo..'/>


           <input type="submit" className="form-control"

           style={{flex:'1'}}
           
           
           value="submit"/>
        


       </form>
       </div>


    )




  }



}

export default AddTodo;