import React from 'react'

function ArrowFunction() {

  const ozelButon = (butonAdi: string) => <button>{butonAdi}</button>;

  return (
    <>
        <h1>Arrow Function ve Bileşenleri Atama</h1>
        <hr />
        {
            ozelButon('Yeni bir buton')
        }

    </>
  )
}

export default ArrowFunction