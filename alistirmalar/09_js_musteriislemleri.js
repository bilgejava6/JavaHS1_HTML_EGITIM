let musteriListesi = [];
function kaydet() {
    /**
     * Öncelikle tüm bileşenlerin bilgilerini çek
     * bunları bir dizinin içerisine at
     * dizinin güncellenmesinden sonra diziyi tabloya yazdır.
    */
    let ad = document.getElementById('ad').value;
    let soyad = document.getElementById('soyad').value;
    let adres = document.getElementById('adres').value;
    musteriListesi.push({ ad, soyad, adres });
    tabloyuDoldur();
}
function duzenle() { }
function sil() { 
    alert('Silme işlemi tıklandı');
}
function temizle() { }

function tabloyuDoldur() {
    let tablo = document.getElementById('musteriListesi');
    tablo.innerHTML = '';
    musteriListesi.forEach((mst, index) => {
        tablo.innerHTML += `        
            <tr>
                <td>${index+1}</td>
                <td>${mst.ad}</td>
                <td>${mst.soyad}</td>
                <td>${mst.adres}</td>
                <td><img src="https://picsum.photos/50/50" alt="" id="p_image"></td>
                <td>
                    <button onclick="sil()" type="button" class="btn btn-danger"> X </button>
                    <button onclick="duzenle()" type="button" class="btn btn-info"> # </button>
                                
                </td>
            </tr>        
        `;
    });
}