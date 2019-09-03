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
    "h1": "DOM\n Is\n Awesome",
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
    "address" : "123 Way 456 Street\n Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let headerimg = document.getElementById('cta-img');
headerimg.setAttribute('src', siteContent['cta']['img-src']);

let middleimg = document.getElementById('middle-img');
middleimg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const navi = document.querySelectorAll('a');
navi[0].innerText = siteContent['nav']['nav-item-1'];
navi[1].innerText = siteContent['nav']['nav-item-2'];
navi[2].innerText = siteContent['nav']['nav-item-3'];
navi[3].innerText = siteContent['nav']['nav-item-4'];
navi[4].innerText = siteContent['nav']['nav-item-5'];
navi[5].innerText = siteContent['nav']['nav-item-6'];
//is there a better way to specifically add content without using indices for tags that are the exact same?

navi.forEach(element => {
  element.style.color = 'green';
})

const Nav = document.querySelector('nav');

const itemOne = document.createElement('a');
itemOne.textContent = 'Home';
Nav.prepend(itemOne);

const itemTwo = document.createElement('a');
itemTwo.textContent = 'Pictures';
Nav.append(itemTwo);

itemOne.style.color = 'green';
itemTwo.style.color = 'green';

const title = document.querySelector('h1');
title.innerText = siteContent['cta']['h1'];

const btn = document.querySelector('button');
btn.innerText = siteContent['cta']['button'];

const subtitle = document.querySelectorAll('h4');
subtitle[0].innerText = siteContent['main-content']['features-h4'];
subtitle[1].innerText = siteContent['main-content']['about-h4'];
subtitle[2].innerText = siteContent['main-content']['services-h4'];
subtitle[3].innerText = siteContent['main-content']['product-h4'];
subtitle[4].innerText = siteContent['main-content']['vision-h4'];
subtitle[5].innerText = siteContent['contact']['contact-h4'];

const info = document.querySelectorAll('p');
info[0].innerText = siteContent['main-content']['features-content'];
info[1].innerText = siteContent['main-content']['about-content'];
info[2].innerText = siteContent['main-content']['services-content'];
info[3].innerText = siteContent['main-content']['product-content'];
info[4].innerText = siteContent['main-content']['vision-content'];
info[5].innerText = siteContent['contact']['address'];
info[6].innerText = siteContent['contact']['phone'];
info[7].innerText = siteContent['contact']['email'];
info[8].innerText = siteContent['footer']['copyright'];

/******************** WITHOUT JSON ********************/
// const navi = document.querySelectorAll('a');
// navi[0].textContent = 'Services';
// navi[1].textContent = 'Product';
// navi[2].textContent = 'Vision';
// navi[3].textContent = 'Features';
// navi[4].textContent = 'About';
// navi[5].textContent = 'Contact';

// const title = document.querySelector('h1');
// title.textContent = 'DOM IS AWESOME'

// const btn = document.querySelector('button');
// btn.textContent = 'Get Started';

// const subtitle = document.querySelectorAll('h4');
// subtitle[0].textContent = 'Features';
// subtitle[1].textContent = 'About';
// subtitle[2].textContent = 'Services';
// subtitle[3].textContent = 'Product';
// subtitle[4].textContent = 'Vision';
// subtitle[5].textContent = 'Contact';

// const info = document.querySelectorAll('p');
// info[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
// info[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
// info[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
// info[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
// info[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
// info[5].textContent = '123 Way 456 Street Somewhere, USA';
// info[6].textContent = '1 (888) 888-8888';
// info[7].textContent = 'sales@greatidea.io';
// info[8].textContent = 'Copyright Great Idea! 2018';