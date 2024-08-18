import { Rating } from '@mui/material'
import React from 'react'
import './ProductCard.css'
interface IProductProps{
    urunAdi: string,
    urunFiyati: number,
    urunResim: string,
    rate: number
}

function ProductCard(urun: IProductProps) {
  return (
    <div className="col-3 p-4">
        <div className="row border rounded-4 p-2 product">
            <div className="col">
                <div className="row">
                    <img className='mb-1' src={urun.urunResim} alt="" />
                </div>
                <div className="row">
                    <label className='form-label mb-1'>{urun.urunAdi}</label>
                </div>
                <div className="row">
                    <label className='form-label mb-1'>{urun.urunFiyati} $</label>
                </div>
                <div className="row mb-5">
                    <Rating readOnly value={urun.rate} />
                </div>
                <div className="row mb-1 ps-4 pe-4">
                    <button className='btn btn-info'>Sepete Ekle</button>
                </div>
                


            </div>
        </div>
    </div>
    
  )
}

export default ProductCard

