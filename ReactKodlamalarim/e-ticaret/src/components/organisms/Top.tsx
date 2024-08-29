import React from 'react'
import TopAbout from '../molecules/TopAbout'
import TopMenu from '../molecules/TopMenu'

function Top() {
  return (
    <div className="container-fluid fixed-top">
        <TopAbout />
        <TopMenu />
    </div>
  )
}

export default Top