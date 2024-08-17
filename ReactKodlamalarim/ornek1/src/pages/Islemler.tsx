import React from 'react'

function Islemler() {

   let sayi: number = 5;
   let sayi2: number = 32;
   const toplam = sayi + sayi2; 

  return (
    <>
        <h1>İşlemler Sayfası</h1>
        <hr />
        <div>{sayi} ile {sayi2} nin toplamı {toplam} dır</div>
        <div>
            {
                45 + 33
            }
        </div>
    </>
  )
}

export default Islemler