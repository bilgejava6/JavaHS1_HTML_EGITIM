import React from 'react'
import Featurs from '../atoms/Featurs'

function Features() {
  return (
    <div className="container-fluid featurs py-5">
    <div className="container py-5">
        <div className="row g-4">
            <Featurs title='Ücretsiz Kargo' content='300₺ ve üzeri alışverişlerde ' icon='car'/>
            <Featurs title='Güvenli Ödeme' content='100% güvenli olarak alışveriş yap' icon='user'/>
            <Featurs title='30 gün iade' content='30 gün içinde sebepsiz iade garantisi' icon='exchange'/>
            <Featurs title='7/24 destek' content='Bize her zaman ulaşabilirsiniz.' icon='phone'/>
        </div>
    </div>
</div>
  )
}

export default Features