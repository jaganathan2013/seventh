const sublinks = [
    {
      page: 'products',
      links: [
        { label: 'payment', icon: 'fas fa-credit-card', url: 'products.html' },
        { label: 'terminal', icon: 'fas fa-credit-card', url: 'products.html' },
        { label: 'connect', icon: 'fas fa-credit-card', url: 'products.html' },
      ],
    },
    {
      page: 'developers',
      links: [
        { label: 'plugins', icon: 'fas fa-book', url: 'products.html' },
        { label: 'libraries', icon: 'fas fa-book', url: 'products.html' },
        { label: 'plugins', icon: 'fas fa-book', url: 'products.html' },
        { label: 'billing', icon: 'fas fa-book', url: 'products.html' },
      ],
    },
    {
      page: 'company',
      links: [
        { label: 'about', icon: 'fas fa-briefcase', url: 'products.html' },
        { label: 'customers', icon: 'fas fa-briefcase', url: 'products.html' },
      ],
    },
  ];
  

  

// sub menu 
const sidebar = document.querySelector('.sidebar-links');// sub menu data dom lode
const linkBtns = [...document.querySelectorAll('.link-btn')];//'products','developers','company'
const submenu = document.querySelector('.submenu');//show hide

const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');

// sub menu dom lode
sidebar.innerHTML = sublinks//3 <div class="sidebar-links"> = 'products','developers','company'
  .map((item) => {          //{page: 'products', links: Array(3)},{2},{3}
    const { links, page } = item;//Link[],page 3
    return `<article ><h4>${page}</h4> <div class="sidebar-sublinks">
    ${links .map((link) => 
      { return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;}).join('')
     }
     </div></article>`;}).join('');

//'products','developers','company' button Action  generat {submenu-center show}
linkBtns.forEach((btn) => {//  3 {'products','developers','company'} =3 button.link-btn
  btn.addEventListener('mouseover', function (e) {//MouseEvent {isTrusted: true, screenX: 285, screenY: 79, clientX: 571, clientY: 16, …}
    
   // Action button data load
    const text = e.currentTarget.textContent; //any 1 = 3 {'products','developers','company'}
    const tempBtn = e.currentTarget.getBoundingClientRect(); //DOMRect {x: 190.49697875976562, y: 15.496987342834473, width: 160, height: 48.990962982177734, top: 15.496987342834473, …}
    const center = (tempBtn.left + tempBtn.right) / 2;//590.4969787597656 = 3 {'products','developers','company'}
    const bottom = tempBtn.bottom - 3;// 61.48795032501221 
    const tempPage = sublinks.find((l) => l.page === text);//'products','developers','company'= Aney 1

    if (tempPage) {
      const { page, links } = tempPage;
      submenu.classList.add('show');
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      // OPTIONAL
      let columns = 'col-2';
      if (links.length === 3) {
        columns = 'col-3';
      }
      if (links.length > 3) {
        columns = 'col-4';
      }
      //view sub mennu
      submenu.innerHTML = `
      <div class="backc"> 
      <h4>${page}</h4>
      <div class="submenu-center ${columns}">
      ${links
          .map((link) => {
            return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
          })
          .join('')}
      </div>
      </div>
      `;
    }
  });
});
//sub menu remove function
hero.addEventListener('mouseover', function (e) {
  submenu.classList.remove('show');
});
nav.addEventListener('mouseover', function (e) {
  //console.log(e.target.classList.contains('link-btn'));  link-btn true
  if (!e.target.classList.contains('link-btn')) {
   // console.log(e.target);//class= nave > nav-center >>>link-btn
   // console.log(e.target.classList);//DOMTokenList ['nav', value: 'nav']
    submenu.classList.remove('show');
  }
});
