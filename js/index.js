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
    "email" : "sales@greatidea.io"
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
// aTag.style.font="green";

let i = 1;  
 aTag.forEach(tags =>{
   tags.textContent = siteContent ['nav'][`nav-item-${i}`]; 
   i++; 
 })

 aTag.forEach((element)=>{
  element.addEventListener("click", (event) => {
    //console.log(event.target)
    event.stopPropagation();
    event.target.style.color = "green";
   
  })
})

const happy1 = document.createElement("a");  
const grabNav = document.getElementsByTagName("nav")[0]; 
happy1.textContent="Nav"; 
grabNav.prepend(happy1); 


const happy = document.createElement("a");  
happy.textContent=" Bar:";  
happy1.appendChild(happy);


const h1Text = document.querySelector('h1'); 
// console.log(h1Text); 
h1Text.textContent = siteContent ['cta']['h1']; 
//add <br> without using innerhtml 


const btn = document.querySelector('button'); 
// console.log(btn); 
btn.textContent = siteContent ['cta']['button']; 


//top content
const featuresH4 = document.querySelector('.top-content h4');
featuresH4.textContent = siteContent['main-content'] ['features-h4'];

const featuresP = document.querySelector('.top-content p');
featuresP.textContent = siteContent['main-content']['features-content'];

const aboutH4 = document.querySelector('.top-content div:last-child h4');
aboutH4.textContent = siteContent['main-content']['about-h4'];

const aboutP = document.querySelector('.top-content div:last-child p');
aboutP.textContent = siteContent['main-content']['about-content'];

//
const servicesH4 = document.querySelector('.bottom-content h4');
servicesH4.textContent = siteContent['main-content'] ['services-h4'];

const servicesP = document.querySelector('.bottom-content p');
servicesP.textContent = siteContent['main-content']['services-content'];

//nth-last-child (2)
const productH4 = document.querySelector('.bottom-content div:nth-last-child(2) h4');
productH4.textContent = siteContent['main-content']['product-h4'];

const productP = document.querySelector('.bottom-content div:nth-last-child(2) p');
productP.textContent = siteContent['main-content']['product-content'];

//nth-last-child 
const visionH4 = document.querySelector('.bottom-content div:last-child h4'); 
visionH4.textContent = siteContent ['main-content']['vision-h4']; 

const visionP = document.querySelector('.bottom-content div:last-child p'); 
visionP.textContent = siteContent ['main-content']['vision-content']

//contact section
const contacth4 = document.querySelector('.contact h4'); 
contacth4.textContent = siteContent ['contact']['contact-h4']; 


const contactP1 = document.querySelector('section.contact p'); 
// console.log(contactP1); 
contactP1.textContent = siteContent ['contact']['address']; 


const contactP2 = document.querySelector('section.contact p:nth-last-child(2)'); 
// console.log(contactP2); 
contactP2.textContent = siteContent ['contact']['phone'];

const contactP3 = document.querySelector('.contact p:nth-child(3)'); 
// console.log(contactP3);
contactP3.textContent = siteContent ['contact']['email']; 


//footer section 
const footerText = document.querySelector('footer p'); 
// console.log(footerText); 
footerText.textContent = siteContent ['footer']['copyright']; 




// const h4TFeature = document.querySelector('.text-content h4'); 
// console.log(h4TFeature); 
// h4TFeature.textContent = siteContent ['main-content'] ['features-h4']; 

// const pTFeature = document.querySelector('.text-content p'); 
// console.log(pTFeature); 
// pTFeature.textContent = siteContent ['main-content'] ['features-content'];


