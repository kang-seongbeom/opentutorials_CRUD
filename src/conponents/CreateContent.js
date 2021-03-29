import { Component } from 'react';

class CreateContent extends Component {
    render() {
        console.log("Create Content render()");
        return (
            <article>
                <h2>Create</h2>
                <form action="/create_process" method="post" onSubmit= { (e) => {
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.des.value
                        );                        
                     } }>
                    <p><input type="text" name="title" placeholder="title"></input></p>
                    <p><textarea name="des" placeholder="description"></textarea></p>
                    <p><input type="submit"></input></p>
                </form>
            </article>
        );
    }
}

export default CreateContent;