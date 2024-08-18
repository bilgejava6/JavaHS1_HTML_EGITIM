import { Avatar, Stack } from '@mui/material'
import React, { useState } from 'react'
import { IUserProfile } from '../model/IUserProfile';

function UserList() {
  const [userList,setUserList] = useState([]);
  const getAllUsers = ()=>{
    fetch('http://34.67.172.44/user/get-all') // get isteği atar
    .then(data=>data.json()) // dönen dataları json olarak çevirir.
    .then(response=>{ // json dataları işler
        console.log(response)
        setUserList(response);
    })
  }  
    
  return (
    <>
        <div className="container">
            <div className="row m-5">
                <button onClick={getAllUsers} className='btn btn-danger'>Kullanıcıları Getir</button>
            </div>
            <div className="row justify-content-center mt-5">
                
                {
                    userList.map((data: IUserProfile,index)=>{
                        return(
                            <div className="col-3 m-2 p-3 shadow rounded-3">
                                <div className="row">
                                    <Stack direction="row" style={{justifyContent: 'center'}}>
                                        <Avatar  alt='Muhammet HOCA' src={'/img/'+(index%5)+'.jpg'} sx={{ width: 80, height: 80 }} />
                                    </Stack>  
                                </div>
                                <div className="row mb-2 p-2">
                                    <label>Id: <b> {data.id}</b> </label>
                                </div>
                                <div className="row mb-2 p-2">
                                    <label>Kullanıcı adı: <b> {data.userName} </b></label>
                                </div>
                                <div className="row mb-2 p-2">
                                    <label>Şifresi: <b> {data.password}</b> </label>
                                </div>
                                <div className="row mb-2 p-2">
                                    <label>E-Postası: <b> {data.email}</b> </label>
                                </div>
                                <div className="row mb-2 p-2">
                                    <button className='btn btn-info mb-1'>Takip Et</button>
                                    <button className='btn btn-warning'>Aktif</button>
                                </div>
                            </div>
                        )
                    })
                }

                


            </div>
        </div>
    </>
  )
}

export default UserList