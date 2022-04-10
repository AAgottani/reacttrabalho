import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';
import { useState } from 'react'; 



//e-mail, senha, nome, sobrenome e data de nascimento

function Login(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

 
  const logar = () => {
    console.log("apertou")
    firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
      console.log(user)

    var dados=firebase.firestore().collection("user").get();
    

    })

  }


  return(
    <div>
        <h1>Login</h1>
        <form>
        <label>Email</label>  
        <br/> 
        <input type="text" size="20" name="email" onChange={e=> setEmail(e.target.value)} />
        <br/> 
        <label>Password</label> 
        <br/>  
        <input type="text" size="20" name="Password"onChange={e=> setPassword(e.target.value)}/>
        <br/> 
        
        </form>
        <br/> 
        <button onClick={logar}>Login</button>
        <>      </>
        <Link to="/"><button>Home</button></Link>
        
    </div>

  )
}



export default Login;