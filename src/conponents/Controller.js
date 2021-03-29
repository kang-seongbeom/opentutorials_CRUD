import { Component } from 'react';

class Controller extends Component{
    render() {
        return(
          <ul>
          <li><a href="/create" onClick = {
              (e) => {
                  e.preventDefault();
                  this.props.onChageMode('create');
              }
          }>create</a></li>

          <li><a href="/update" onClick = {
              (e) => {
                  e.preventDefault();
                  this.props.onChageMode('update');
              }
          }>update</a></li>
          
          <li><input type="button" value="delete" onClick = {
              (e) => {
                  e.preventDefault();
                  this.props.onChageMode('delete');
              }
          }></input></li>
        </ul>
        );
    }
}

export default Controller;