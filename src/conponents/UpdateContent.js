import { Component } from 'react';

class UpdateContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            des: this.props.data.des
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        console.log("Update Content render()", this.props.data);
        return (
            <article>
                <h2>Update</h2>
                <form action="/create_process" method="post" onSubmit={(e) => {
                    e.preventDefault();
                    this.props.onSubmit(
                        this.state.id,
                        this.state.title,
                        this.state.des
                    );
                }}>
                    <input type="hidden" name="id" value={ this.state.id }></input>
                    <p><input type="text" name="title" placeholder="title"
                        value={this.state.title} onChange={this.inputFormHandler}></input></p>
                    <p><textarea name="des" placeholder="description" onChange={this.inputFormHandler} value={this.state.des}></textarea></p>
                    <p><input type="submit"></input></p>
                </form>
            </article>
        );
    }
}

export default UpdateContent;