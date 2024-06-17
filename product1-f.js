const option = [
    { id: 'All',},{ id: 'Alexa',},{ id: 'Amazon',},{id: 'Skills',},
      {id: 'Categories',},{id: 'Devices',},{id: 'Fashion',},
      {id: 'Apps & Games',},{id: 'Books',},{id: 'Appliances',},
  ];

  const pr = [
    { img: "./source/product/a.jpg"}, { img: "./source/product/aaa.jpg"},
    { img: "./source/product/aa.jpg"}, { img: "./source/product/ad.jpg"},
    { img: "./source/product/agg.jpg"}, { img: "./source/product/ajk.jpg"},
    { img: "./source/product/an.jpg"}, { img: "./source/product/ann.jpg"},
    { img: "./source/product/aood.jpg"}, { img: "./source/product/aq.jpg"}, 
  ];
  
  let options = [...option]; 
           
  
  const coun = document.querySelector('.country');//grid All products
  
  const dis = () => {
    coun.innerHTML =options
      .map((opti) => {
        const { id } =opti;
        return `<option value="${id}">
        ${id}
          </option>`;
      })
      .join('');
  };
  dis();
 let Pr = [...pr];        
   const multi = document.querySelector('.multi');//grid All products
  
  const proj = () => {
    multi.innerHTML =Pr
      .map((opti) => {
        const { img } =opti;
        return `<div class="box_style">

        
        <img src="${img}" class="product-img img" alt=""/>

         <div class="picons">
         <div class="over-lay"></div>
                <a href="url">
                  <i class="fas fa-search" alt="a"></i>
                  <i class="fas fa-shopping-cart"alt=""a></i>
                  </a>
            </div>
        </div>
       
        `;
      })
      .join('');
  };
  proj();
  

  let Pr1 = [...pr];        
   const multi1 = document.querySelector('.multi1');//grid All products
  
  const proj1 = () => {
    multi1.innerHTML =Pr1
      .map((opti) => {
        const { img } =opti;
        return `<div class="box_style">

        
        <img src="${img}" class="product-img img" alt=""/>

         <div class="picons">
         <div class="over-lay"></div>
                <a href="url">
                  <i class="fas fa-search" alt="a"></i>
                  <i class="fas fa-shopping-cart"alt=""a></i>
                  </a>
            </div>
        </div>
       
        `;
      })
      .join('');
  };
  proj1();
  