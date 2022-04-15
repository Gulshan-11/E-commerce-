import background from "./RedStore_Img/image1.png";
import "./login.css"


function Login(){
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={background} alt="background" width="60%" />
                </div>
                <div className="col-2">
                    <div className="form-con">
                        <div className="btn">
                            <p onClick={login}>Login</p>
                            <p onClick={register}>Register</p>
                            <hr id="indicator"></hr>
                        </div>
                        <div className="content">
                            <form id="LoginForm">
                                <input type="text" placeholder="username"></input>
                                <input type="password" placeholder="password"></input>
                                <button type="submit" className="button">Login</button>
                                <a href="#">Forgot password?</a>
                            </form>

                            <form id="RegForm">
                                <input type="text" placeholder="username"></input>
                                <input type="email" placeholder="email"></input>
                                <input type="password" placeholder="password"></input>
                            <button type="submit" className="button">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var indicator = document.getElementById("indicator");

function register(){

    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}

function login(){

    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}

export default Login;