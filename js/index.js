const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaImg = document.getElementById('cta-img'); 
ctaImg.setAttribute ('src', 'img/header-img.png'); 

const midImg = document.getElementById('middle-img'); 
midImg.setAttribute('src', 'img/mid-page-accent.jpg'); 


//nav 
const aTag= document.querySelectorAll('a'); 
let i = 1;  
 aTag.forEach(tags =>{
   tags.textContent = siteContent ['nav'][`nav-item-${i}`]; 
   i++; 
 })

const h1Text = document.querySelector('h1'); 
console.log(h1Text); 
h1Text.textContent = siteContent ['cta']['h1']; 
//add <br> without using innerhtml 


const btn = document.querySelector('button'); 
console.log(btn); 
btn.textContent = siteContent ['cta']['button']; 


//feature and about
// const featureAbout= document.querySelectorAll('.text-content'); 
// let i = 0;  
//   featureAbout.forEach(text =>{
//    text.textContent = siteContent ['main-content'][`${i}`]; 
//    i++ <= featureAbout.length; 
//  })







// const h4TFeature = document.querySelector('.text-content h4'); 
// console.log(h4TFeature); 
// h4TFeature.textContent = siteContent ['main-content'] ['features-h4']; 

// const pTFeature = document.querySelector('.text-content p'); 
// console.log(pTFeature); 
// pTFeature.textContent = siteContent ['main-content'] ['features-content'];


