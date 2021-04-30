import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import ButtonSignbox from './ButtonSignbox.js'

class signup extends Component {
    constructor(props) {
        console.log("가입");
        super(props);
        this.state = {
            userId: "",
            password: "",
            checkPwd: "",
            email: "",
            emailChecked: false
        }
    }

    // userId 작성함수
    writeUserId = (e) => {
        console.log("userId :", e)
        e.preventDefault();
        this.setState({
            userId: e.target.value
        })
    }

    // password 작성함수
    writePwd = (e) => {
        console.log("password :", e)
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    }

    // 지정한 password를 재작성하여 체크하는 함수
    writeSamepwd = (e) => {
        console.log("checking password :", e)
        e.preventDefault();
        this.setState({
            checkPwd: e.target.value
        })
    }

    // email 작성함수
    writeEmail = (e) => {
        console.log("email: ", e)
        e.preventDefault();
        this.setState({
            email: e.target.value
        })
        if(e.target.value.includes("@")) {
            this.setState({
                emailChecked: true
            })
        } else {
            this.setState({
                emailChecked: false
            })
        }
    }

    // submit 버튼 클릭연동함수
    submitClick = () => {
        console.log("가입완료", this.state.userId, this.state.password, this.state.checkPwd, this.state.email);
        // this.props.history.push('/')
    }

    // cancel 버튼 클릭연동함수
    cancelClick = () => {
        console.log("가입을 취소하고 메인페이지로 돌아갑니다.");
        // this.prop.history.push('/')
    }

    render() {
        return (
            <div className="sign-up">
                <div className="signup-form">
                    <h1>Sign Up</h1>
                    <form className="signup">
                        <div className="signup">
                        <input 
                        className="userid"
                        type="text"
                        placeholder="Userid"
                        onChange={this.writeUserId}
                        />
                    </div>
                    <br />
                    <div className="Pwd">
                        <input
                        className="Pwd"
                        type="password"
                        autoComplete="on"
                        placeholder="Password"
                        onChange={this.writePwd}
                        /> 
                    </div>
                    <br />
                    <div className="checkPwd">
                        <input
                        className="checkPwd"
                        type="password"
                        autoComplete="on"
                        placeholder="Check password"
                        onChange={this.writeSamepwd}
                        />
                    </div>
                    <br />
                    <div className="email">
                        <input
                        className="email"
                        type="text"
                        placeholder="E-mail"
                        onChange={this.writeEmail}
                        />
                    </div>
                    <br />
                    </form>
                    <ButtonSignbox submitClick={this.submitClick} cancelClick={this.cancelClick} />
                </div>
            </div>
        );
    }
}


export default signup;
