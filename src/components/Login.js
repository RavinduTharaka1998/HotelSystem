import  React, {Component} from 'react';
import '../Styles/Login.css'
import NavbarLogin from './NavBar_login';
import Footer from './Footer';
import axios from 'axios';


  export default  class Login extends  Component{

  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        email:'',
        password:''
    }
}
onChangeEmail(e){
    this.setState( {
        email: e.target.value
    });
}
onChangePassword(e){
    this.setState( {
        password: e.target.value
    });
}

onSubmit(e){
    e.preventDefault();


    const Email = this.state.email;
    let object = {
        email : this.state.email,
        password : this.state.password
    };

    if ((this.state.email === "admin@gmail.com") && (this.state.password === "admin123")) {
       //  const Station = "Hotel";
         this.props.history.push('/HomepageAdmin/'+Email);

    }
    else {
        axios.post('http://localhost:4000/tourist/login',object)
            .then(res => {
                if(res.data.message === "Successful Login"){
                    // alert(res.data.message)
                    // alert(Email)
                    this.props.history.push('/HomePage/'+Email);
                  // this.props.history.push('/');
                }
                else{
                    // alert(res.data.message)
                    this.props.history.push('/');
                }

            });
    }
    

}

  render() {
    return (
        
      <div className="login-page">
        
        < NavbarLogin />
        <div className="content">
            <form onSubmit={this.onSubmit}>
                <h2>Login</h2>
                <input type="email" id="email" name="email" placeholder="Enter your email" required value={this.state.email} onChange = {this.onChangeEmail}/>

                <input type="password" id="password" name="password" placeholder="Enter your password" required value={this.state.password} onChange = {this.onChangePassword}/>
                <br/>
                {/* <button type="submit">Login</button> */}
                <input type="submit"  value='Login' style={{background:'black',color:'white',padding:5,width:'50%'}}/>
            <p>
                <a href="#">Forgot Password?</a>
            </p>
            </form>
            
        </div>
<br/>
        < Footer /> 
       
      </div>
    );
  }
}


