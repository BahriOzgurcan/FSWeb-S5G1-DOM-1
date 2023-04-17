const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

// console.log(siteContent["cta"]["h1"]);

const element = document.getElementsByTagName("h1");

// console.log(element);
// console.log(element[0]);

element[0].textContent = siteContent["cta"]["h1"];

const element2 = document.getElementsByTagName("button");

element2[0].textContent = siteContent["cta"]["button"];

console.log(document.getElementsByTagName("a"));

console.log(document.querySelectorAll('nav a'));

const navList = document.querySelectorAll('nav a');

navList.forEach((nodeAdi, index) => {
  return nodeAdi.textContent = siteContent["nav"]["nav-item-" + (index + 1)];
})

//

console.log(document.querySelectorAll(".text-content h4"));
console.log(document.querySelectorAll(".text-content p"));

const anaIcerikH4 = document.querySelectorAll(".text-content h4")
const anaIcerikP = document.querySelectorAll(".text-content p")

const arrayH4 = [];
const arrayP = [];
Object.keys(siteContent["ana-içerik"]).forEach((elementAdi, index)=>{
  if(index % 2 === 0){
    arrayH4.push(siteContent["ana-içerik"][elementAdi]);
  } else {
    arrayP.push(siteContent["ana-içerik"][elementAdi])
  }
});

console.log(arrayH4);
console.log(arrayP);


anaIcerikH4.forEach((nodeAdi,index) => {
  return nodeAdi.textContent = arrayH4[index];
})
anaIcerikP.forEach((nodeAdi,index) => {
  return nodeAdi.textContent = arrayP[index];
})

const iletisim = document.querySelectorAll("section.contact h4, section.contact p");

iletisim[0].textContent = siteContent["iletisim"]["iletişim-h4"];
iletisim[1].textContent = siteContent["iletisim"]["adres"];
iletisim[2].textContent = siteContent["iletisim"]["telefon"];
iletisim[3].textContent = siteContent["iletisim"]["email"];

const copyrightText = document.querySelector("footer a");

copyrightText.textContent = siteContent["footer"]["copyright"];

console.log(copyrightText)

document.querySelector("footer a").setAttribute("class","bold");
const italik = document.querySelectorAll("nav a");
for(let i = 0; i<italik.length; i++){
  italik[i].setAttribute("class", "italic");
};

console.log(document.querySelectorAll("img"));

const imgRev = document.querySelectorAll("img");

imgRev[0].setAttribute("src", siteContent["images"]["logo-img"]);
imgRev[1].setAttribute("src", siteContent["images"]["cta-img"]);
imgRev[2].setAttribute("src", siteContent["images"]["accent-img"]);