# REACT NOTLARIM

## React Kurulum

    ilk olarak nodeJS kurulumunun yapılması gereklidir. Bu ders itibarı ile güncel sürüm 22.6.0 dır
    - https://nodejs.org/en/download/package-manager

    DİKKAT!! 
    Zaman içerisinde nodeJs ve ReactJS sürümleri değişebilir bu nedenle güncel sürümleri 
    kullanınız.

```bash
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# download and install Node.js (you may need to restart the terminal)
nvm install 22

# verifies the right Node.js version is in the environment
node -v # should print `v22.6.0`

# verifies the right npm version is in the environment
npm -v # should print `10.8.2`
```

    React kurulum notları
    standart react JS kurulumu için aşağıdaki kodu kullanın

```bash
    npx create-react-app yeni-uygulamam
```

    Uygulamanızı TypeScript ile kurmak için TSX

```bash
    npx create-react-app yeni-uygulama --template typescript
```

## Uygulamayı başlatmak
    Dikkat!! 
    uygulamayı başlatmak için "npm start" komutu kullanılır, ancak bu komut uygulamayı oluşturduğunuz
    dizinin içerisinde çalıştırılmalıdır. Aksi takdirde hata verecektir. Burada almakta olduğunuz
    hata package.json hatası olabilir ancak gerçek durum yanlış klasörde olmanızdır.

```bash
    cd ReactKodlamalarım/yeni-uygulama
    npm start; // uygulamayı başlatır.
```

## Uygulamanın port ayarlarını değiştirmek

```json
// default çalışma şeklidir ve 3000 portuna ayarlıdır
  "scripts": {
    "start": "react-scripts start",
  },
// MacOS
  "scripts": {
    "start": "PORT=19090 react-scripts start",
  },
// ya da 
  "scripts": {
    "start": "export PORT=19090 react-scripts start",
  },
// WINDOWS
  "scripts": {
    "start": "set PORT=19090 && react-scripts start",
  },
```

## Kodlarınızı mümünkün olduğunca gizlemek için 

```json
  "scripts": {
    "build": "GENERATE_SOURCEMAP=false react-scripts build"
  },
```

### Uygulamayı Başlatmak ve Temizlemek

  1- npx create-react-app ornek1 --template typescript
  2- public/index.html gereksiz açıklamaları sil
  3- src içerisinde "index.tsx" ve "react-app-env.d.ts" dışındakileri sil
  4- index.tsx içerisinde gereksiz tüm alanları silin.
```ts
  import ReactDOM from 'react-dom/client';
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(<h1>Merhaba React</h1>);
```
  5- ilgili proje klasörünün içerisine gir "cd ornek1"
  6- çalıştır. "npm start"

## Yeni sayfalar ile çalışmak ve oluşturmak

  yeni bir React Page oluşturmak için tsx dosyası oluşturmalı ve
  içersine html tag leri dönen bir return eklemelisisiniz.

```tsx
// yeni App sayfası
function App(){
    return(
        <h1>App Sayfası</h1>        
    )
}

export default App;
```

```tsx
// Yanlış kullanım.
// Neden, bir return işlemi sadece tek bir değer ve tag dönebilir
// bu nedenle birden fazla tek tek başına dönülemez.
function App(){
    return(
        <h1>App Sayfası</h1>  
        <p>burası yeni bir sayfa</p>      
    )
}

export default App;
```

```java
public String[] getAdListtesi(){
  return "Ahmet", "Canan","Demet";
}
```

```tsx
// doğru kullanım
function App(){
    return(
      <div>
        <h1>App Sayfası</h1>  
        <p>burası yeni bir sayfa</p>      
      </div>  
    )
}

export default App;
```

```tsx
// genel doğru kullanım
function App(){
    return(
      <>
        <h1>App Sayfası</h1>  
        <p>burası yeni bir sayfa</p>      
      </>  
    )
}

export default App;
```

## Interface ile template oluşturmak
  java da bir nesneyi modellemek için class ları kullanır ve onlardan
  nesne yaratarak kullanırız. TypeScript e ise interface kullanarak
  oluşturulacak değişken ya da nesnelerin türlerini tanımlarız.

```typescript
export interface IMusteri{
    id: number,
    ad: string,
    telefon: string,
    active: boolean,
    soyad?: string, // ? işareti optional olarak tanımlamaya yarar
    resim?: string
}
```

## Bazı önemli terimler
  musteri{
    id: 4,
    ad: '',
    soyad: 'ahmet'
  }
  empty -> boş demektir, eğer sunucudan bir değer gelirken boş geliyor ise bununla karılaşırsınız.

  musteri{
    id: 4,
    ad: , -- null
    soyad: 'ahmet'
  }
  null -> eğer sunucudan ilgili alan için hiç bir değer gelmiyor ise 

  musteri{
    id: 4,
    soyad: 'ahmet'
  }
  undefined -> okumayı talep ettiğin anahtar değerin kendisi yok ise
  bununla karşılaşırsın

  ## Döngüler ile çalışmak

  ### forEach

    bir array içerisindeki değerleri döner ve onlarla işlem yapmanızı sağlar.
    return type ı void dir.
  
  ### map

    bir array içerisindeki değerler ile çalışmanızı sağlar ve işlem sonunda
    dizinin her bir değeri için sonuç döner. ÖZellikle bir return olmaz ise
    dizinin kendisini döner.

## React için 3. parti bileşenleri kurmak ve kullanmak

### Boorstrap kullanımı

  bootstrap kullanmak için öncelikle kurulum yapıyoruz.
```bash
npm i bootstrap@5.3.3.
```
  boorstrap kullanabilmek için root a yani index.tsx e import etmeniz gerekli
  olan kodu eklemelisiniz.

  import 'bootstrap/dist/css/bootstrap.min.css'

### React Router kullanımı

  react router, react için sayfalar arası geçiş yönetim kütüphanesidir. kurulum için

```bash
npm i react-router-dom
```

  kurulum yaptıktan sonra react yönlendirmeleri için index.tsx ya da ayrıca bir sayfada 
  yönetmek üzere routing bileşenlerini eklemeniz gereklidir.
  ilk olarak importları yapalım
  "import {BrowserRouter,Routes,Route} from 'react-router-dom';"  
  sonra yönlendirme işlemlerini tanımlıyoruz.


### Alert kullanımı
  Uygulamalarımızda belli tepkileri vermek için alert kullanırız. Bunlardan biriside sweet alert
  kurulum ve kullanımı basittir.
  Kurulum:
```bash
pm i sweetalert --save
```
  Kullanım:
  öncelikle import ediniz.


## Fetch İşlemleri

  Bir end-point e istek atmak ve dönen dataları almak için kulnırız.

```tsx
fetch('http://localhost:8080/user/register',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'userName': userName,
        'password': password,
        'email': email
      })
    })
```