import React from 'react';
import Buttonbox from './Buttonbox';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import logo from '../logo.png';


class login extends React.Component {
    constructor() {
        super();
        console.log("@@")
        this.state = {
            userId: "",
            password: "",
            useridChecked: false,
            passwordChecked: false,
        }
        this.handleUserId = this.handleUserId.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.loginClick = this.loginClick.bind(this);
        this.backClick = this.backClick.bind(this);
    }

    // userid 작성 함수
    handleUserId = (e) => {
        console.log(e);
        this.setState({
            userId: e.target.value
        });
    }

    // password 작성 함수
    handlePassword = (e) => {
        console.log(e);
        this.setState({
            password: e.target.value
        })
        if(e.target.value.length >= 8) {
            this.setState({
                passwordChecked: true
            })
        } else {
            this.setState({
                passwordChecked: false
            })
        }
    }

    // 로그인버튼 클릭연동함수
    loginClick = () => {
        console.log("사용자 email : ", this.state.userId);
        console.log("사용자 password : ", this.state.password);
        // this.props.history.push('/')
    }

    // 뒤로가기버튼 클릭연동함수
    backClick = () => {
        console.log("메인페이지로 이동합니다.");
        // this.prop.history.push('/')
    }

    render() {
        return (
            <div className="Login">
                <div className="login-form">
                    <img src={logo} alt="" />
                    <form className="login">
                        <div className="userid">
                        <input 
                        className="userid"
                        type="text"
                        placeholder="userId"
                        onChange={this.handleUserId}
                        />
                    </div>
                    <br />
                    <div className="password">
                        <input
                        className="password"
                        type="password"
                        autoComplete="on"
                        placeholder="password"
                        onChange={this.handlePassword}
                        /> 
                    </div>
                    <br />
                    </form>
                    <Buttonbox loginClick={this.loginClick} backClick={this.backClick}/>
                </div>
            </div>
        );
    }
}

export default login;