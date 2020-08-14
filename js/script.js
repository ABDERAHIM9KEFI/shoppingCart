const productTable = document.querySelector('tbody')
const removeCartItemButtons = document.getElementsByClassName('bi-x-square-fill')
const plusbutton = document.getElementsByClassName('bi bi-plus')

const minusbutton = document.getElementsByClassName('bi bi-dash')
const heartbuttons = document.querySelectorAll('.fa-heart')
const heartbuttons1 = document.querySelectorAll('#table-images')


const prodNum = document.getElementById('prodNum')

let productNumber = 0









var addToCartButtons = document.getElementsByClassName('btn btn-primary')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}

let productArray = []
function addToCartClicked(event) {
  let productPrice = parseInt(event.target.previousElementSibling.innerHTML.replace('$',''))
  let productImg = event.target.parentElement.parentElement.previousElementSibling.getAttribute('src')
  let productName = event.target.parentElement.previousElementSibling.previousElementSibling.children[0].innerHTML
  let productObj = {productPrice,productImg,productName}
  let indexOfProduct = productArray.find(el=>el.productName === productObj.productName)
  if(indexOfProduct){
    event.target.setAttribute('disabled',true)
  } else {
    productArray.push(productObj)
    productNumber++
    prodNum.innerHTML = productNumber
    let newProduct = `
      <tr>
      <th scope="row"><svg id="minusbutton" width="1em" height="1em" viewBox="0 0 16 16" class="bi white bi-x-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.854 4.854a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
    </svg>
    <img id="table-images" src=${productImg}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
      </svg></th>
      <td>${productObj.productName}</td>
      <td><svg id="plusbutton" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
      </svg>
      <span id ="Q">1</span>
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"/>
      </svg><br><br></td>
      <td>$${productObj.productPrice}</td>
      <td id="td-total">$${productObj.productPrice}</td>
    </tr>
    `
    productTable.innerHTML += newProduct
    var total1 = document.querySelectorAll('#td-total')
    for (let button of removeCartItemButtons) {
      button.addEventListener('click', removeCartItem)
  }
  function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    productNumber--
    prodNum.innerHTML = productNumber
  }
  heartbuttons1.forEach((el) =>  el.addEventListener("click",()=> el.classList.toggle('red')))
  Array.from(removeCartItemButtons ).forEach((el) => el.addEventListener("mouseover",()=> el.classList.replace('white', 'red')))
  Array.from(removeCartItemButtons ).forEach((el) => el.addEventListener("mouseout",()=> el.classList.replace('red', 'white'))) 
  Array.from(plusbutton).map((el) => {
    el.addEventListener("click",()=>{
      el.nextElementSibling.innerHTML = parseInt(el.nextElementSibling.innerHTML) +1
      var price= el.parentElement.nextElementSibling.nextElementSibling.innerText.replace("$","")
      
        total.innerHTML= parseInt(total.replace("$","")) + parseInt(price) + "$"
      
      
    });
  });
  Array.from(minusbutton).map((el) => {
    el.addEventListener("click",()=>{
      if(el.previousElementSibling.innerHTML>1){
        el.previousElementSibling.innerHTML = parseInt(el.previousElementSibling.innerHTML) -1
      }
    });
  });
  total1.forEach(total =>{
    console.log(parseInt(total.innerHTML.replace("$",""))+1)
        })
}}
Array.from(heartbuttons).forEach((el) => el.addEventListener("click",()=> el.classList.toggle('is-active')))
// <input id="quantity"  value="1" id="fname" name="fname">
