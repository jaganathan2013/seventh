const data = [
    {img: "./source/a.jpeg",
      name: "peter doe",},
    {img: "./source/aa.jpg",
     name: "susan doe", },
    {img: "./source/aaa.jpg",
     name: "emma doe", },
  ];
//   export default people;

// import data from './data.js'
const container = document.querySelector('.slide-container')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
// if length is 1 hide buttons
if (data.length === 1) {                                   //prevent bello 2 
  nextBtn.style.display = 'none'
  prevBtn.style.display = 'none'
}
// if length is 2, add copies of slides

let people = [...data]                     //(3) [{…}, {…}, {…}]
if (data.length === 2) {
  people = [...data, ...data]                              //prevent 3 length bello 
}
//ARRANGE UI DATA 3{} show complet F1
//slide-container = slide 3{next,active,last} 
container.innerHTML = people.map((person, slideIndex) => {//data,index = d,012 

  const { img, name } = person//data-->get variable
    let position = 'next'                                              //VERIFY if function
    if (slideIndex === 0) {          //0===0
      position = 'active'
    }
    if (slideIndex === people.length - 1) {//      2 ===  total L 3 - 1 
      position = 'last'
    }
    // if (data.length <= 1) {
    //   console.log(data.length);
    //   position = 'active'
    // }
   
    return `<article class="slide ${position}">
  <img src=${img} class="img" alt="${name}"/>
<div class="quote-icon">
<i class="fas fa-quote-right"></i>
</div>
 </article>`
  })
  .join('')

//ALL FUNCTION 2
const startSlider = (type) => {//undefind
  // get all three slides active,last next
  const active = document.querySelector('.active')//1 3
  let next = active.nextElementSibling   //2 1      //('.active') = Get next element ('next')
  const last = document.querySelector('.last')//null 2

  if (!next) {//null true    12null
   // console.log(next);
    next = container.firstElementChild                //create loop / null = Get first element
  }
//prevent delet old data
  active.classList.remove('active')//0
  next.classList.remove('next')//0
  last.classList.remove('last')//0

  if (type === 'prev') {                //call prev
    active.classList.add('next')
    last.classList.add('active')
    next = last.previousElementSibling

    if (!next) {
      next = container.lastElementChild
    }
    next.classList.remove('next')
    next.classList.add('last')
    return
  }

  active.classList.add('last')//3
  next.classList.add('active')//1
  last.classList.add('next')//2

}


nextBtn.addEventListener('click', () => {
  startSlider()
})
prevBtn.addEventListener('click', () => {
  startSlider('prev')

})
