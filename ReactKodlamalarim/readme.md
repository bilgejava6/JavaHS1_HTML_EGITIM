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