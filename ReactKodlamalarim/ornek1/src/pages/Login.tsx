import React, { useState } from 'react'

function Login() {
    /**
     * 2 input
     * 1 buton
     * butona basılınca  eğer inputlar boş ise uyarı yazısı çıksın
     */
    const [userName,setUserName] = useState(''); // kullanıcı adını tutmak için
    const [password, setPassword] = useState(''); // şifre yi tutmak için
    const [isEmpty, setIsEmpty] = useState(false); // değerler boş mu bakmak için
    const login = ()=>{
        if(userName === '' || password === '')
            setIsEmpty(true);
        else
            setIsEmpty(false);
    }
  return (
    <>
        <h1>Login Page</h1>
        <hr />
        <div>
            <input type="text" onChange={evt=> setUserName(evt.target.value)}/>
        </div>
        <div>
            <input type="password"  onChange={evt=> setPassword(evt.target.value)}/>
        </div>
        <div>
            <label style={{color:'red'}}>
                {
                    isEmpty && 'Kullanıcı adı ya da şifre boş geçilemez'
                }
            </label>
        </div>
        <div>
            <button onClick={login}>Giriş Yap</button>
        </div>
        
    </>
  )
}

export default Login