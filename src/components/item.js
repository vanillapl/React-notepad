import React from "react";
import { Button } from 'react-bootstrap';

export default class Item extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isEdit:false
    };
  }

  Action(){
    if(this.state.isEdit){
      return (
          <td>
          <div className="btn-group" role="group">
          <button  type="button" className="btn btn-default" onClick={this.onSaveClick.bind(this)} style={{fontFamily: 'Open Sans Condensed'}}>Save</button>
          <button  type="button" className="btn btn-default" onClick={this.onCancelClick.bind(this)} style={{fontFamily: 'Open Sans Condensed'}}>Cancel</button>
          </div>
          </td>
      );
    }
    return (
      <td>
      <div className="btn-group" role="group">
      <button  type="button" className="btn btn-default" onClick={this.onEditClick.bind(this)} style={{fontFamily: 'Open Sans Condensed'}}>Edit</button>
      <button  type="button" className="btn btn-default" onClick={this.props.deleteTask.bind(this, this.props.task)} style={{fontFamily: 'Open Sans Condensed'}}>Delete</button>
      </div>
      </td>
    );
  }
  taskSection(){
    const { task, isCompleted } = this.props;
    const taskStyle = {
      width: '65%',
      fontFamily: 'Open Sans Condensed',
      fontSize: '22px',
      color: isCompleted?'green':'red',
      cursor: 'pointer'
    };

    if(this.state.isEdit){
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
          <input type="text" className="form-control" defaultValue={task} ref="editContent"/>
          </form>
        </td>
      )
    }
    return(
      <td style={taskStyle}
      onClick={this.props.toggle.bind(this, task)}>{this.props.task}</td>
    );
  }

  render() {
    return (
        <tr>
          {this.taskSection()}
          {this.Action()}
        </tr>
    );
  }
  onEditClick(){
    this.setState({isEdit: true});
  }
  onCancelClick(){
    this.setState({isEdit: false});
  }
  onSaveClick(event){
    event.preventDefault();
    const oldT = this.props.task;
    const newT  = this.refs.editContent.value;
    this.props.saveTask(oldT, newT);
    this.setState({isEdit:false});
  }
}
