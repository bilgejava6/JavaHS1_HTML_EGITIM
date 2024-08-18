import { Avatar } from '@mui/material'
import React from 'react'

function UserList() {
  return (
    <>
        <div className="container">
            <div className="row justify-content-center mt-5">
                

                <div className="col-3 m-2 p-3 shadow rounded-3">
                    <div className="row">
                        <Avatar />
                    </div>
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                </div>


            </div>
        </div>
    </>
  )
}

export default UserList