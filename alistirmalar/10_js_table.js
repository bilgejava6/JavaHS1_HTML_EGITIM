const musteriList = [{
    "id": 1,
    "ad": "Larina",
    "soyad": "Denziloe"
}, {
    "id": 2,
    "ad": "Hillel",
    "soyad": "Josum"
}, {
    "id": 3,
    "ad": "Holmes",
    "soyad": "Aspall"
}, {
    "id": 4,
    "ad": "Flossie",
    "soyad": "Barrowclough"
}, {
    "id": 5,
    "ad": "Marco",
    "soyad": "Byrcher"
}, {
    "id": 6,
    "ad": "Frederico",
    "soyad": "Morigan"
}, {
    "id": 7,
    "ad": "Alfonso",
    "soyad": "Hogben"
}, {
    "id": 8,
    "ad": "Margaretta",
    "soyad": "Gwinn"
}, {
    "id": 9,
    "ad": "Alexis",
    "soyad": "Ducarne"
}, {
    "id": 10,
    "ad": "Dominique",
    "soyad": "Skellern"
}, {
    "id": 11,
    "ad": "Cori",
    "soyad": "Pargeter"
}, {
    "id": 12,
    "ad": "Daisi",
    "soyad": "Joscelyn"
}, {
    "id": 13,
    "ad": "Olimpia",
    "soyad": "Storr"
}, {
    "id": 14,
    "ad": "Tine",
    "soyad": "Kornes"
}, {
    "id": 15,
    "ad": "Anestassia",
    "soyad": "Szymanzyk"
}, {
    "id": 16,
    "ad": "Katlin",
    "soyad": "Chimenti"
}, {
    "id": 17,
    "ad": "Innis",
    "soyad": "Semerad"
}, {
    "id": 18,
    "ad": "Jsandye",
    "soyad": "Olenov"
}, {
    "id": 19,
    "ad": "Edith",
    "soyad": "Doul"
}, {
    "id": 20,
    "ad": "Roxi",
    "soyad": "Di Francecshi"
}, {
    "id": 21,
    "ad": "Jeremiah",
    "soyad": "Clancey"
}, {
    "id": 22,
    "ad": "Evin",
    "soyad": "Fonteyne"
}, {
    "id": 23,
    "ad": "Regan",
    "soyad": "Marvin"
}, {
    "id": 24,
    "ad": "Panchito",
    "soyad": "Aubery"
}, {
    "id": 25,
    "ad": "Jacintha",
    "soyad": "Lealle"
}];
let secilenIndexler = [];
let secilenMusteriler = [];
function loadActiveList() {
    const activeList = document.getElementById('active_list');
    activeList.innerHTML = '';
    musteriList.forEach((data,index) => {
        activeList.innerHTML += `
                <tr>
                    <td>${data.id}</td>
                    <td>${data.ad}</td>
                    <td>${data.soyad}</td>
                    <td>
                        <input onclick="selectIndex(${index})" class="form-check-input" type="checkbox"> Seç
                    </td>
                </tr>
        `;
    })
}
function selectIndex(index){
    let varmi = secilenIndexler.indexOf(index);
    if(varmi===-1)
        secilenIndexler.push(index);
    else
        secilenIndexler = secilenIndexler.filter(i=> i!==index);
}


function secilenleriEkle(){
    /**
     * Öncelikle seçilen indexli müşterileri müşterilistesinden çekerek
     * seçilenmüşteriler listesine ekliyoruz.
     */
    console.log('seçilen indexler...: ',secilenIndexler);
    secilenMusteriler = [];
    secilenIndexler.forEach(i=>{
        let musteri = musteriList[i];
        secilenMusteriler.push(musteri);
    });
    /**
     * seçilenMüşterileri tabloya işleyelim.
     */
    const secilenlerTablosu = document.getElementById('secilenler_tablosu');
    secilenlerTablosu.innerHTML = '';
    console.log('secilen müşteriler...: ', secilenMusteriler);
    secilenMusteriler.forEach((data,index)=>{
        secilenlerTablosu.innerHTML += `
            <tr>
                <td>${data.id}</td>
                <td>${data.ad}</td>
                <td>${data.soyad}</td>
                <td>
                    <input class="btn btn-danger" type="button" value="Sil">
                </td>
            </tr>
        `;
    });

}

function tumunuEkle(){
    musteriList.forEach((data,index)=>{secilenIndexler.push(index)});
    secilenleriEkle();
}

function temizle(){
    secilenIndexler = [];
    secilenMusteriler = [];
    document.getElementById('secilenler_tablosu').innerHTML = '';
    loadActiveList();
}

loadActiveList();