import React, { useState } from 'react'

function HesapIslemleri() {
  //let s1:number;
  //let s2:number;
  const [s1,setS1] = useState(0);
  const [s2,setS2] = useState(0); 
  const [sonuc,setSonuc] = useState(0); 
  const islem = (islemType: string)=>{
    switch (islemType) {
        case 'T': setSonuc(s1+s2); break;
        case 'Çı':setSonuc(s1-s2); break;
        case 'Ça': setSonuc(s1*s2);break;
        case 'B': setSonuc(s1/s2);break;
        default: setSonuc(s1+s2); break;
    }
  } 
  return (
    <>
        <h1>Hesaplamalar</h1>
        <hr />
        <div>            
            <input onChange={evt=> setS1(parseInt(evt.target.value))} type="text" />
        </div>
        <div>
            <input onChange={evt=> setS2(parseInt(evt.target.value))} type="text" />
        </div>
        <div>
            <button onClick={()=>islem('T')}>Topla</button>
            <button onClick={()=>islem('Çı')}>Çıkart</button>
            <button onClick={()=>islem('Ça')}>Çarp</button>
            <button onClick={()=>islem('B')}>Böl</button>
        </div>
        <div>
            <label>Sonuç...: {sonuc}</label>
        </div>
    </>
  )
}

export default HesapIslemleri