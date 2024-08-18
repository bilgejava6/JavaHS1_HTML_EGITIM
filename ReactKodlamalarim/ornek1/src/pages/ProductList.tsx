import React,{useState} from 'react'
import {IProduct} from '../model/IProduct';
import ProductCard from '../components/molecules/ProductCard';
function ProductList() {
  const [productList, setProductList] = useState([]);
  const getAllProduct = ()=>{
    fetch('https://dummyjson.com/products') // ilgili adres get isteği at
    .then(data=>data.json()) // dönen datayı json a çevir
    .then(res=> setProductList(res.products)) // json array şeklinde gelen datayı product liste yükle
  }  
  return (
    <>
        <div className="container">
            <div className="row m-5">
                <button className='btn btn-danger' onClick={getAllProduct}>Ürünleri Getir</button>
            </div>
            <div className="row">               
                    {
                        productList.map((data: IProduct,index)=>{
                            return(<ProductCard 
                                urunAdi={data.title}
                                urunFiyati={data.price}
                                urunResim={data.thumbnail}
                                rate={data.rating}
                                 />)
                        })
                    }
            </div>
        </div>
    </>
  )
}

export default ProductList