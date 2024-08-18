import React, { useState } from 'react'
import swal from 'sweetalert';
function Register() {
  const [userName,setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [email, setEmail] = useState('');
  const register = ()=>{
    console.log(userName, password, email);
    fetch('http://34.67.172.44/user/register',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'userName': userName,
        'password': password,
        'email': email
      })
    })
    .then(data=>data.json()) // dönen datayı json a dönüştür.
    .then(response=>{  // dönen datayı işliyoruz.
      console.log(response);
      swal('Bildirim!','Üyelik Başarı ile oluşturuldu.','success')
    })
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-5 shadow rounded-3 p-4">
              <div className='text-center mb-4'>
                <h1>Ragister Page</h1>
                <hr />
              </div>
              <div className="mb-3">
                  <input onChange={evt=> setUserName(evt.target.value)} type="text" placeholder='kullanıcı adı' className='form-control' />
              </div>
              <div className="mb-3">
                  <input onChange={evt=> setPassword(evt.target.value)}  type="password" placeholder='şifre' className='form-control' />
              </div>
              <div className="mb-3">
                  <input onChange={evt=> setRePassword(evt.target.value)}  type="password" placeholder='şifre tekrar' className='form-control' />
                  {
                    password !== rePassword &&
                    <label className='text-danger mt-1'>* Şifreler uyuşmuyor.</label>
                  }
              </div>
              <div className="mb-3">
                  <input onChange={evt=> setEmail(evt.target.value)}  type="email" placeholder='e-posta' className='form-control' />
              </div>
              <div className="mb-3 d-grid">
                  <button onClick={register} className='btn btn-success'>Üye Ol</button>
              </div>
              <div className="mb-3 text-center">
                <a href="/login">giriş yap</a>
              </div>              
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Register