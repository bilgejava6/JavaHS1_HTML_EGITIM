import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
function Login() {
    const nagivate = useNavigate();
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
        else{
            fetch('http://34.67.172.44/user/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'userName': userName,
                    'password': password
                })
            }).then(data=>data.json())
            .then(response=>{
                console.log('gelen cevap...: ',response)
                if(response)
                    nagivate('/user-list');
                else    
                    swal('Uyarı!','Kullanıcı adı ya da şifre hatalıdır','error');
            })
        }

    }
  return (
    <>
        <div className="container">
            <h1>Login Page</h1>
            <hr />
            <div className="row justify-content-center mt-5">
                <div className="col-5 p-5 shadow rounded-3">
                    <div className="mb-3">
                        {
                            isEmpty &&
                            <div className='alert alert-warning'>
                                <h4 className='alert-heading"'>Uyarı!</h4>
                                <hr />
                                <p>Kullanıcı adı ya da şifre boş geçilemez</p>
                            </div>
                        }
                    </div>
                    <div className='mb-3'>
                            <input placeholder='kullanıcı adı' className='form-control' type="text" onChange={evt=> setUserName(evt.target.value)}/>
                    </div>
                    <div className='mb-3'>
                            <input placeholder='şifre' className='form-control' type="password"  onChange={evt=> setPassword(evt.target.value)}/>
                    </div>  
                    <div className='mb-5 d-grid'>
                            <button className='btn btn-success' onClick={login}>Giriş Yap</button>
                    </div>
                    <div className="mb-3 text-center">
                        <a href="/register">register</a>
                    </div>
                </div>
            </div>
        </div>
        
        
        
    </>
  )
}

export default Login