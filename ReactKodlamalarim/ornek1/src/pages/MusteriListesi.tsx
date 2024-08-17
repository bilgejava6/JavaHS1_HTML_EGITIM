import React from 'react'
import { IMusteri } from '../model/IMusteri'

function MusteriListesi() {
    const mst1: IMusteri = {
        id: 5,
        ad: 'Murat',
        telefon: '0 555 999 7714',
        active: false
    }
  return (
    <>
        <h1>Müşteri Listesi Sayafsı</h1>
        <hr />
        <h2>1. Müşteri</h2>
        <div>müşteri id.........: {mst1.id}</div>
        <div>müşteri ad.........: {mst1.ad}</div>
        <div>müşteri telefon....: {mst1.telefon}</div>
        <div>müşteri active.....: {mst1.active}</div>
        
        
    </>
  )
}

export default MusteriListesi