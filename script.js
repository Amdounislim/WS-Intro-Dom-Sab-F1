var img = document.getElementById('my-img')
img.addEventListener('click', function () {
    // img.style.width = "200px"
    img.setAttribute('src', "https://static.vecteezy.com/system/resources/thumbnails/008/030/262/small/whatsapp-logo-on-green-background-3d-render-free-photo.jpg")
})

// document.getElementById('firstP').addEventListener('click', function(){
//     document.getElementById('firstP').style.color='red'
//     document.getElementById('firstP').style.backgroundColor='yellow'
// })

var para = Array.from(document.getElementsByTagName('p'))
for (let i = 0; i < para.length; i++) {
    para[i].addEventListener('click', function () {
        para[i].style.color = 'red'
        para[i].style.backgroundColor = 'yellow'
    })
    para[i].addEventListener('mouseover', function () {
        para[i].style.fontSize = '30px'
    })
    para[i].addEventListener('mouseout', function () {
        para[i].style.fontSize = '18px'
    })
}

var works = Array.from(document.querySelectorAll('.works'))

for (const el of works) {
    el.addEventListener('click', function () {
        el.nextElementSibling.innerHTML = "GO MY CODE"
        el.previousElementSibling.innerText = "Hello"
        console.log(el.innerHTML)
        console.log(el.innerText)

    })
}

/*******************************/
let btn=document.querySelector("#myButton")
let input=document.querySelector("#my-input")
let list=document.querySelector(".list")

btn.addEventListener("click", function(){
    let text = input.value
    let li = document.createElement('li')
    let rmvBtn = document.createElement('button')
    li.innerText = text
    rmvBtn.innerText = 'X'
    li.appendChild(rmvBtn)
    list.appendChild(li)
    input.value=''

    rmvBtn.addEventListener('click', function(){
        rmvBtn.parentElement.remove()
    })
})

/**********************/
let spans = Array.from(document.getElementsByTagName('span'))

for (const i in spans) {
    spans[i].addEventListener('click', function(){
        // spans[i].innerHTML = Number(spans[i].innerHTML) + 50 
        spans[i].innerHTML = +spans[i].innerHTML + 50 
    })
}
