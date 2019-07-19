import React from 'react';
import './Post.css';

const post = (props) => {
        return (
            <div className = "Post">
                <div className = "PostTitle">
                    {props.title}
                </div>
                <div className = "PostContent">
                    {props.content}
                </div>
                <div className="delete_button" onClick={props.click}>X</div>
            </div>
        );
}

export default post;