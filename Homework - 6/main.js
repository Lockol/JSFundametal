// 6. DOCUMENT OBJECT MODEL (DOM)
// 1. - Done -----------------------------------------------------------------------------------------------------------------
    
    // let liElement = document.querySelectorAll('#list li');
    
    // let arrContent = [
    //     liElement[0].innerHTML,
    //     liElement[liElement.length - 1].innerHTML,
    //     liElement[1].innerHTML,
    //     liElement[3].innerHTML,
    //     liElement[2].innerHTML
    // ];

    // alert(arrContent.join(', '));




    
// 2. - Done ------------------------------------------------------------------------------------------------

    // let background = document.querySelectorAll('h1')[0];
    // background.classList.add('greenBG');

    // let newItem = document.querySelectorAll('#myDiv p');
    // let para = [
    //     newItem[0].classList.add('one'),
    //     newItem[1].classList.add('two'),
    //     newItem[2].classList.add('tree'),
    //     newItem[3].classList.add('four'),
    // ]
    
    // const invisibleText = document.querySelector('span');
    
    // invisibleText.addEventListener('click', () => {
    //     invisibleText.classList.toggle('invis');
    // });
        
        
    
    // let listItems = document.querySelectorAll('#myList li');
    // let str = '';

    // for (let i = 0; i < listItems.length; i++) {
    // str += listItems[i].textContent;
    // }

    // myList.textContent = str;
    

// 3. - Done ------------------------------------------------------------------------------------------------
    // const newMain = document.createElement('main');
    // const newDiv = document.createElement('div');
    // const newP = document.createElement('p');
    // const htnk = document.querySelector('body')

    // newMain.classList.add('mainClass', 'check', 'item');
    // newDiv.setAttribute('id', 'myDiv');
    // newP.textContent = 'First paragraph';

    // newDiv.append(newP);
    // newMain.append(newDiv);
    // htnk.append(newMain);

    
// 4. - Done ------------------------------------------------------------------------------------------------


    // document.querySelector('.btn').onclick = myClick; 
    // function myClick(){
    
    // let a = document.querySelector('[type="text"]').value;
    // let b = document.querySelector('[type="phone"]').value;
    // let c = document.querySelector('[type="date"]').value;
    // let d = document.querySelector('[type="email"]').value;

    // let array = [
    // document.querySelector('.out').innerHTML = a,
    // document.querySelector('.out').innerHTML = b,
    // document.querySelector('.out').innerHTML = c,
    // document.querySelector('.out').innerHTML = d,
    // ]
    // document.querySelector('.out').innerHTML = array.join('<br>');
    // }


    
// 5. - Done ------------------------------------------------------------------------------------------------

    // let allCirles = document.querySelectorAll('.circle');

    // allCirles.forEach(circle => {
    //     let bla = circle.dataset.anim;
    //     let x = circle.classList.add(bla);
    //     const circleStyles = getComputedStyle(circle);
    //         const hasAnimation = circleStyles.animation !== 'none';
    //         if (hasAnimation) {
    //         console.log('Елемент має анімацію');
    //         }
    //     });



// 6. - AlmostDone ------------------------------------------------------------------------------------


let removeActive = document.querySelectorAll('.color');
let removeImg = document.querySelectorAll('.shoe');
let removeBG = document.querySelectorAll('.gradient');
const fastShippingCheckbox = document.getElementById('fastShipping');
let suitableFor = document.querySelectorAll('input[type="radio"]');
removeActive.forEach(color => {
    color.addEventListener('click', function() {
    removeActive.forEach(c => {
        if (c !== this) {
            c.classList.remove('active');
            }
        if (fastShippingCheckbox.checked) {
                fastShippingCheckbox.checked = false;
              }
    this.classList.add('active');
        });
    });

    color.addEventListener('click', function() {
        let colorName = this.getAttribute('color');
        removeImg.forEach(shoe => {
          if (shoe.getAttribute('color') === colorName) {
            shoe.classList.add('show');
          } else {
            shoe.classList.remove('show');
          }
        });
      });

    color.addEventListener('click', function() { 
        let gradientName = this.getAttribute('color');
        removeBG.forEach(gradient => {
            if (gradient.getAttribute('color') === gradientName) {
                gradient.classList.add('second');
              } else {
                gradient.classList.remove('second');
              }
            });
        });
        
    color.addEventListener('click', function() {
        let price = +this.dataset.price;
        document.querySelector('#outprice').innerHTML = price + '$';


        suitableFor.forEach((radio) => { // Не вистачило знаннь та часу для написання корретного коду
            radio.addEventListener('change', () => {
                         
              if (radio.value == 'adults') {
                document.querySelector('#outprice').innerHTML = +price  + '$';
              } else {
                document.querySelector('#outprice').innerHTML = +price/ 2 + '$';
              }
            });
          });
            
        
        fastShippingCheckbox.addEventListener('click', function checked() {
            if (this.checked) {
                document.querySelector('#outprice').innerHTML = (+price + 30) + '$';
            } else {
                document.querySelector('#outprice').innerHTML = price + '$';
            }
            
        });
    });
});










