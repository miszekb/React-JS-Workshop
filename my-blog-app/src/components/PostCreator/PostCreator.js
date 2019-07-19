import React from 'react';
import shortid from 'shortid';
import './PostCreator.css';

class PostCreator extends React.Component {

    state = {
        id: "",
        title: "",
        content: ""
    };

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        // submit
        this.props.onSubmit({
            id: shortid.generate(),
            title: this.state.title,
            content: this.state.content,
            complete: false
        })

        this.setState ({
            id: "",
            title: "",
            content: ""
        });
    }

    handleDelete = () => {
        alert('no zarycz no');
    }

    render() {
        return (
            <div className="PostCreator">
                <p>Title</p>
                    <input
                        type="text" 
                        name="title" 
                        value = {this.state.title}
                        onChange={this.handleChange}
                        placeholder = "Write title here.."      
                    />
                <p>Text</p>
                    <input 
                        type="text"
                        name="content" 
                        value = {this.state.content}
                        onChange={this.handleChange}
                        placeholder = "Write content here.."
                    />
                <button onClick={this.handleSubmit}>+</button>
            </div>
        );
    }
}

export default PostCreator;