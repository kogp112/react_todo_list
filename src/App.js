import React from 'react';
import './index.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { green } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';

const styles = {
  root: {
    width: '80%',
    overflowX: 'auto',
    margin: '20px 0px',
  },
  addButton: {
    variant: 'contained',
    color: 'white',
    background: 'blue',
    margin: '20px 0px',
  },
  table: {
    minWidth: 650,
  },
  greenAvatar: {
    color: '#fff',
    backgroundColor: green[500],
  },
  removeButton: {
    variant: 'contained',
    color: 'white',
    background: 'red',
    margin: '20px 0px',
  }
};
  
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        lists:[],
        title: '',
        description: ''
      };
      
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
        lists: [
          ...this.state.lists,
            {
              title: this.state.title,
                description: this.state.description
            }],
            title: '',
            description:''
      })
    }
    
    handleRemove = () => {
      this.setState({
        lists:[]
      })
    }
    
    render(){
      return (
        <div className="App">
          <header className="App-header">
            <h1 align="center">
              React ToDo List
            </h1>
            <div align="center">
              <Avatar className={this.props.classes.greenAvatar}>
                <AssignmentIcon />
                  </Avatar>
            </div>
          </header>
          <div align="center">
            <TextField
              name="title"
              onChange={this.handleChange}
              label="Task Name"
              margin="dense"
            />
          </div>
          <div align="center">
            <TextField
              name="description"
              onChange={this.handleChange}
              label="Description"
              margin="dense"
            />
          </div>
          <div align="center">
            <Button onClick={this.handleSubmit} className={this.props.classes.addButton}>Add</Button>
          </div>
          <div align="center">
            <Paper className={this.props.classes.root}>
              <Table className={this.props.classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>No</TableCell>
                    <TableCell>Task Name</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.lists.map((l, index)=>(
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{l.title}</TableCell>
                      <TableCell>{l.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </div>
          <div align="center">
            <Button onClick={this.handleRemove} className={this.props.classes.removeButton}>✖</Button>
          </div>
        </div>
      );
    }
}

export default withStyles(styles)(App);
