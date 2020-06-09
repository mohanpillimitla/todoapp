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
       <form onSubmit={this.onSubmit}
       style={{display:'flex'}}>
           <input type="text"
           value={this.state.title}
           onChange={this.onChange} name="title" 
           
           style={{flex:'10'}}

        
           
           placeholder='ADD Todo..'/>


           <input type="submit" 

           style={{flex:'1'}}
           
           
           value="submit"/>


       </form>


    )




  }



}

export default AddTodo;