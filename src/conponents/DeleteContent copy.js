import { Component } from 'react';

class DeleteContent extends Component {
    render() {
        console.log("Delete Content render()");
        return (
            <article>
                <h2>Delete</h2>
                <p>{this.props.des}</p>
            </article>
        );
    }
}

export default DeleteContent;