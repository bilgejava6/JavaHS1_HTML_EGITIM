let musteriListesi = [];
let editIndex = -1;
function kaydet() {
    /**
     * Öncelikle tüm bileşenlerin bilgilerini çek
     * bunları bir dizinin içerisine at
     * dizinin güncellenmesinden sonra diziyi tabloya yazdır.
    */
    let ad = document.getElementById('ad').value;
    let soyad = document.getElementById('soyad').value;
    let adres = document.getElementById('adres').value;
   if(editIndex>-1){// edit işlemi
        musteriListesi[editIndex].ad = ad;
        musteriListesi[editIndex].soyad = soyad;
        musteriListesi[editIndex].adres = adres;  
        tabloyuDoldur();  
        temizle();    
   }else{ // yeni kayıt işlemi
       
        if(ad.trim()==='' || soyad.trim()==='' || adres.trim()==='')
            swal({
                title: "HATA!",
                text: "Lütfen tüm alanları doldurun",
                icon: "error",
                button: "Tamam",
            });
        else{
            musteriListesi.push({ ad, soyad, adres });
            tabloyuDoldur();
            swal({
                title: "Kayıt işlemi",
                text: "Müşteri baraşı ile kayıt edilmiştir.",
                icon: "success",
                button: "Tamam",
            });
            temizle();
        }
   }
    
   editIndex = -1;
}
function duzenle(index) {
    let musteri = musteriListesi[index];
    document.getElementById('ad').value=musteri.ad;
    document.getElementById('soyad').value=musteri.soyad;
    document.getElementById('adres').value=musteri.adres;
    editIndex = index;
 }

function sil(index) { 
    swal({
        title: "DİKKAT!!!",
        text: "Seçtiğiniz Kullanıcıyı silmek istiyor musunuz?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          musteriListesi.splice(index,1);
          tabloyuDoldur();
          swal("Kayıt başarı ile silindi", {
            icon: "success",
          });
        } else {
          swal("Silme işlemi iptal edildi.");
        }
      });
      
   
}
function temizle() {
    document.getElementById('ad').value='';
    document.getElementById('soyad').value='';
    document.getElementById('adres').value='';    
 }

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
                    <button onclick="sil(${index})" type="button" class="btn btn-danger"> X </button>
                    <button onclick="duzenle(${index})" type="button" class="btn btn-info"> # </button>
                                
                </td>
            </tr>        
        `;
    });
}
