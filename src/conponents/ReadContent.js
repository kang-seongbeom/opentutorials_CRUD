import { Component } from 'react';

class ReadContent extends Component {
    render() {
        console.log("Read Content render()");
        return (
            <article>
                <h2>{this.props.title}</h2>
                <p>{this.props.des}</p>
            </article>
        );
    }
}

export default ReadContent;