import { IMusteri } from "../model/IMusteri";

function App(){
    let sayi = 4;
    let sayi2 = 56;
    let toplam = sayi + sayi2;
    console.log('toplam', toplam);
    /**
     * DİKKAT!!!!
     * Js komutları ve değişlenker esnektir ve hataya yatkındır. Bu nedenle 
     * bir değişkene istenilen değer atanabilir. Bu da sorun yaratır.
     */
    let arr = [];
    arr.push("ifade");
    arr.push(5);
    arr.push(false);
    console.log(arr);
    // typescript te değişkenin datatype bilgisi : konularak belirlenir.
    const ifadeDizisi: string[] = [];
    ifadeDizisi.push('ifade - 1');
    ifadeDizisi.push('ifade - 2');
    ifadeDizisi.push('ifade - 3');
    console.log(ifadeDizisi);

    let sayisalDeger:number; // sayısal değişken tanımlama
    let ifade:string; // ifade değişkeni string tanımlama
    let multiTypeIfade:string | null= null; // birden fazla type ı olan değişken tanımlama

    ifade = 'yine çoook sıcak bir gün';
    console.log('ifade....: ', ifade.toUpperCase());
    
    // eğer bir değişken null değer olabiliyor ise mutlaka 
    // kontrol edilerek kullanılmalıdır.
    multiTypeIfade = 'bu havada gidilmez';
    if(multiTypeIfade)
        console.log('coklutip.....: ', multiTypeIfade.toUpperCase());

    const musteri:IMusteri = {
        id: 2,
        ad: 'Muhammet',
        telefon: '0 555 999 8877',
        active: false
    }

    const musteri2:IMusteri = {
        id: 5,
        ad: 'Murat',
        telefon: '0 999 888 7744',
        active: false
    }

    return(
        <>
            <h1>App Sayfası</h1>
            <p>Merhaba burası ReactJS için başlangıç noktasıdır.</p>
        </>       
    )
}

export default App;
