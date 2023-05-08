// 7. BROWSER OBJECT MODEL (BOM). EVENTS

// 1. - Done ----------------------------------------------------------------------------------------


// let  newWindow = window.open("", "", "width=300,height=300");

// setTimeout(() => {
//     newWindow.resizeTo(500, 500);
   
// }, 2000);

// setTimeout(() => {
//     newWindow.moveTo(200, 200);
   
// }, 4000);
// setTimeout(() => {
//     newWindow.close()
   
// }, 6000)




  // 2. - Done ------------------------------------------------------------------------------------------------


// додав стиль у CSS
    // document.querySelector('button').onclick = function changeCSS() {
    //     document.getElementById('text').classList.add('change');}
    
    
    // шукаю інший спосіб
    
    // let x = {
    //     "color": "orange",
    //     "font-size": "20px",
    //     "font-family": "Comic Sans MS"
    // }
    // btn.addEventListener('click', () => {
    // function changeCSS() {
    //     document.getElementById('#text').style.color = "orange";
    // } });
    


// 3. - Done ------------------------------------------------------------------------------------------------


// document.body.innerHTML = `
// <div>   
//     <button class="" id="btn1" >Click to make the page blue.</button>
//     <button class="" id="btn2" >Double-Click to make the page pink.</button>
//     <button class="" id="btn3" >Click and hold to make the page brown.</button>
//     <a href="">Hover over to make a page yellow</a>
//     </div> 
// `;

// btn1.addEventListener('click', ()   => {
//     document.querySelector('div').style.backgroundColor = 'blue';});

// btn2.addEventListener('dblclick', ()   => {
//     document.querySelector('div').style.backgroundColor = 'pink';});

// btn3.onmousedown = function() {
//     document.querySelector('div').style.backgroundColor = 'brown';};
// btn3.onmouseup = function() {
//     document.querySelector('div').style.backgroundColor = 'white';};
// const a = document.querySelector('a');
// a.onmouseenter = function() {
//     document.querySelector('div').style.backgroundColor = 'yellow';};



// 4. - Done ------------------------------------------------------------------------------------------------


// let option = document.getElementById('sel1');
// btn6 = document.querySelector('#btn6');

//     btn6.addEventListener('click', function()  { 
//         const selectOption = option.selectedIndex; 
//         if (selectOption => 0) {
//             option.remove(selectOption);
//         } 
//     });
    




// array
// 5. - Done ----------------------------------------------------------------------------------------


// document.body.innerHTML = ` 
// <button class="" id="btn1" >Magic button</button>
// `;
// const btn1 = document.getElementById('btn1');
// btn1.onclick = () => console.log("I was pressed!");
// btn1.onmouseenter = () => console.log("Mouse on me!");
// btn1.onmouseleave = () => console.log("Mouse is not on me!");




// 6. - Done ------------------------------------------------------------------------------------------------

// window.onresize = () => document.body.innerHTML = 'Height is: ' + window.innerHeight + ',' + 'Width is :' + window.innerWidth





// 7. - Done ------------------------------------------------------------------------------------------------

const countrySelect = document.getElementById("country");

const citySelect = document.getElementById("cities");
const selected = document.getElementById("selected");

  const citiesByCountry = {
    ger: ["Berlin", "Furstenfeldbruck", "Hamburg"],
    usa: ["New York", "Los Angeles", "Santa Fe"],
    ukr: ["Kyiv", "Petropávlivska-Borshhagivka", "Kharkiv"]
  };

  function updateCities() {
    const country = countrySelect.value;
    const cities = citiesByCountry[country] || [];

    citySelect.innerHTML = "";

    cities.forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.appendChild(option);
    });

    selected.textContent = `Selected country: ${country}, city: ${citySelect.value}`;
  }

  function updateSelected() {
    selected.textContent = `Selected country: ${countrySelect.value}, city: ${citySelect.value}`;
  }

  countrySelect.addEventListener("change", updateCities);
  citySelect.addEventListener("change", updateSelected);

  updateCities();


