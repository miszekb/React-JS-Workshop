import React from 'react';
import './Login.css'

const PROPER_NICKNAME = 'miszekb'
const PROPER_PASSWORD = 'hasło';

let current_nickname = '';
let current_password = '';

class Login extends React.Component {
       
    state = {
        is_user_logged: false
      }
  
      HandleLogin = () => {
        if(current_nickname == PROPER_NICKNAME){
          if(current_password == PROPER_PASSWORD) {
            this.setState({
              is_user_logged: true
            });
            alert('Logowanie powiodło się!');
          }
          else alert('Logowanie nie powiodło się :(');
        }
        else alert('Logowanie nie powiodło się :(');
      }
  
      HandleChange = (evt) => {
        if(evt.target.name == 'nickname') current_nickname = evt.target.value;
        if(evt.target.name == 'password') current_password = evt.target.value;
      }

    render() {
        const isLogged = !this.state.is_user_logged;
        return (
                <div>
                    {isLogged ?
                    <div className="Login">
                            <label>Nickname</label>
                            <form onSubmit={this.HandleLogin}>
                            <input
                            type="text"
                            name="nickname"
                            placeholder="Your nickname.."
                            onChange={this.HandleChange}
                            onSubmit={this.HandleLogin}
                            />
                            <label>Password</label>
                            <input
                            type="password"
                            name="password"
                            placeholder="Your password.."
                            onChange={this.HandleChange}
                            />
                            <input type="submit" value="Log in"/>
                            </form>
                        <br/>
                        
                        <button 
                        className="log_button"
                        onClick={this.HandleLogin}>Log in</button>
                        <h5>Don't have an account? <a>Click here!</a></h5>                 
                    </div> : null }
                </div>
        )
    }

}

export default Login;