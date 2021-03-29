//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import TOC from './conponents/Toc'
import Subject from './conponents/Subject'
import ReadContent from './conponents/ReadContent'
import CreateContent from './conponents/CreateContent'
//import DeleteContent from './conponents/DeleteContent'
import Controller from './conponents/Controller'
import UpdateContent from './conponents/UpdateContent';

class App extends Component {

  //생성자
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'create',
      selected_content_id: 2,
      subject: { title: 'State web', sub: 'world wide web' },
      welcome: { title: 'welcome', des: 'hello, welcome' },
      contents: [
        { id: 1, title: "html", des: "state html" },
        { id: 2, title: "css", des: "state css" },
        { id: 3, title: "javascript", des: "state javascript" }
      ]
    }
  }

  getReadContent(){
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i++;
    }
  }

  getContent() {
    var _title, _des, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _des = this.state.welcome.des;
      _article = <ReadContent title={_title} des={_des} />
    } else if (this.state.mode === 'read') {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} des={_content.des} />
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={(_title, _des) => {
        this.max_content_id++;
        var _content = this.state.contents.concat({ id: this.max_content_id, title: _title, des: _des });
        this.setState({
          contents: _content
        });
      }} />

    } else if (this.state.mode === 'update') {
      var _content = this.getReadContent();
      _article = <UpdateContent data={ _content } onSubmit={(_title, _des) => {
        this.max_content_id++;
        var _content = this.state.contents.concat({ id: this.max_content_id, title: _title, des: _des });
        this.setState({
          contents: _content
        });
      }} />
    }
  }

  //함수
  render() {
    console.log("App render()");

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={() => { this.setState({ mode: "welcome" }) }} />

        <TOC onChangePage={(id) => {
          this.setState({ mode: "read", selected_content_id: Number(id) });
        }}
          data={this.state.contents} />

        <Controller onChageMode={(_mode) => {
          this.setState({
            mode: _mode
          });
        }} />

        {this.getContent()}
      </div>
    );
  }
}

export default App;
