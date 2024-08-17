import React, { useState } from 'react'

function HesapMakinesi() {
  let sayi1: number;
  let sayi2: number;
  //let toplam: number = 0;

  /**
   *  useState hook
   *  bu bileşen bir değişkenin durumunu takip eder, eğer bu değişkende bir 
   * değişiklik olur ise ilgili fonksiyonun tekrar çalışmasını yani render
   *  olmasını sağlar.
  */ 
  //      get  ,  set
  const [toplam,setToplam] = useState(0);
  console.log('Sayfa Render oldu.');
  return (
    <>
        <h1>Hesap İşlemleri</h1>
        <hr />
        <div>
            <input onChange={evt=> sayi1 = parseInt(evt.target.value)} type="text"/>
        </div>
        <div>
            <input onChange={evt=> sayi2 = parseInt(evt.target.value)}  type="text"/>
        </div>
        <div>
            <button onClick={()=>{
                //toplam = sayi1+sayi2
                setToplam(sayi1+sayi2);
              //  console.log(toplam);
              
              }} type="button">Topla</button>
        </div>
        <div>
            <label>Sonuç....: {toplam} </label>
        </div>

    </>
  )
}

export default HesapMakinesi