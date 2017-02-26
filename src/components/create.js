import React from "react";

export default class Create extends React.Component{
  constructor(props){
    super(props);
    this.state={
      error:null
    };
  }
  renderError(){
    if(!this.state.error){
      return null;
    }
    return <div style={{color:'red'}}>{this.state.error}</div>
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group"><input type="text" style={{fontFamily: 'Open Sans Condensed'}} className="form-control" placeholder="Please input your new pad text" ref="content"/></div>
        <div><button className="btn btn-default" style={{fontFamily: 'Open Sans Condensed'}}>Create</button></div>
        {this.renderError()}
      </form>
    )
  }
  onSubmit(event){
    event.preventDefault();
    const content = this.refs.content;
    const task = content.value;
    const valid = this.valid(task);
    if(valid){
      this.setState({error:valid});
      return;
    }
    this.setState({error:null});
    this.props.createTask(task);
    this.refs.content.value = '';
  }
  valid(task){
    if(!task){
      return 'Please enter a task.';
    } else if(_.find(this.props.todos, todo => todo.task === task)){
      return 'Task already exist.';
    } else {
      return null;
    }
  }
}
