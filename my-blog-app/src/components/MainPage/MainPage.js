import React from 'react';
import './MainPage.css';
import PostContainer from '../../containers/PostContainer/PostContainer';
import Register from '../../containers/Register/Register';
//let IS_USER_LOGGED_IN = false;

const PROPER_NICKNAME = 'miszekb'
const PROPER_PASSWORD = 'hasło';

let current_nickname = '';
let current_password = '';

class MainPage extends React.Component {

    state = {
      is_user_logged: this.props.logged,
      register_request: false
    }

    HandleLogin = () => {
      if(current_nickname == PROPER_NICKNAME){
        if(current_password == PROPER_PASSWORD) {
          this.setState({
            is_user_logged: true
          });
          alert('Login succeed!');
        }
        else alert('Login failed :(');
      }
      else alert('Login failed :(');
    }

    HandleChange = (evt) => {
      if(evt.target.name == 'nickname') current_nickname = evt.target.value;
      if(evt.target.name == 'password') current_password = evt.target.value;
    }

    HandleRegister = () => {
      const reg = this.state.register_request;
      this.setState({
        register_request: !reg
      })
    }

    render() {
        const isLogged = this.state.is_user_logged;
        const register = this.state.register_request;
        return ( <div>
            {   isLogged ? <PostContainer/>: 
                      register ? <Register/>
                      :
                      <div className="Login">
                        <h3>Nickname</h3>
                        <input
                          type="text"
                          name="nickname"
                          placeholder="Your nickname.."
                          onChange={this.HandleChange}
                        />
                        <h3>Password</h3>
                        <input
                          type="password"
                          name="password"
                          placeholder="Your password.."
                          onChange={this.HandleChange}
                        />
                        <br/>
                        <button 
                        className="log_button"
                        onClick={this.HandleLogin}>Log in</button>
                        <h5>Don't have an account? <a onClick={this.HandleRegister}>Click here!</a></h5>
                    </div> 
                  }
                  </div>
        );
    }
}

export default MainPage;