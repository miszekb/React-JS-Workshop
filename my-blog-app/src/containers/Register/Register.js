import React from 'react';
import './Register.css'
import MainPage from '../../components/MainPage/MainPage';

const PROPER_NICKNAME = 'miszekb'
const PROPER_PASSWORD = 'hasło';

let current_nickname = '';
let current_password = '';
let current_repeat = '';

class Register extends React.Component {
       
    state = {
        users: [  
            {nickname: 'miszekb', password: 'hasło'}
        ],
        is_user_registered : false
      }
  
      HandleRegister = () => {
        if(current_nickname.length > 3){
          if(current_password.length > 3) {
              if(current_password === current_repeat) {
                this.setState({
                    is_user_registered: true,
                    users: []
                });
                alert("You've got registered successfully")
            }
            else alert("Passwords doesn't match :(");
          }
          else alert('Your password is too short :(');
        }
        else alert('Your nickname is too short :(');
      }
  
      HandleChange = (evt) => {
        if(evt.target.name == 'nickname') current_nickname = evt.target.value;
        if(evt.target.name == 'password') current_password = evt.target.value;
        if(evt.target.name == 'repeat') current_repeat = evt.target.value;

      }

    render() {
        const isLogged = this.state.is_user_registered;
        return (
                <div>
                    {!isLogged ?
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
                        <h3>Repeat Password</h3>
                        <input
                          type="password"
                          name="repeat"
                          placeholder="Your password.."
                          onChange={this.HandleChange}
                        />
                        <br/>
                        <button 
                        className="log_button"
                        onClick={this.HandleRegister}>Register</button>
                    </div> : <MainPage logged={true}/> }
                </div>
        )
    }

}

export default Register;