import React from 'react';
import Post from '../../components/Post/Post';
import './PostContainer.css';
import '../../components/Post/Post.css'
import PostCreator from '../../components/PostCreator/PostCreator';
import MainPage from '../../components/MainPage/MainPage';


class PostContainer extends React.Component {

    state = {
        posts: [],
        logged: true
    };

    addPost = (post)  => {
        if (post.title.length > 0 && post.content.length > 0) {
            this.setState({
                posts: [post, ...this.state.posts]
            })
            alert('Post Added Successfully!')
        }
        else alert('You forgot something :(')    
    }

    deletePost = (key) => {
        alert(key)
        const posts = [...this.state.posts]
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id === key) {
                posts.splice(i,1);
                alert('Post has been deleted!');
                this.setState({
                    posts: posts
                })
            }
        }
    }

    logoutHandler = () =>
    {
        this.setState({
            logged: false
        })
    }

    render() {
        const is_logged  = this.state.logged;
        return (
            <div>
                {
                is_logged ? 
                <div className= "Container">
                    <button className = "logout_button" onClick = {this.logoutHandler}>Log out</button>
                    <PostCreator onSubmit={this.addPost}/>
                    {this.state.posts.map(post => (
                        <Post 
                            key={post.id} 
                            title = {post.title}
                            content = {post.content}  
                            click = {() => this.deletePost(post.id)}
                        />))}
                    <Post title="Post1" 
                        content="This is an example blog post!"/>
                    <Post title="Post1" 
                        content="This is an example blog post!"/>
                    <Post title="Post1" 
                    content="This is an example blog post!"/>
                </div> : <MainPage logged={this.state.logged}/>
                }
            </div>
        );
    }
}

export default PostContainer;