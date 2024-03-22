let numero1 = document.querySelector('.numero1')
let numero2 = document.querySelector('.numero2')
let numero3 = document.querySelector('.numero3')
let numero4 = document.querySelector('.numero4')
let numero5 = document.querySelector('.numero5')
let numero6 = document.querySelector('.numero6')
let btn = document.querySelector('.btn')






let randomico1 = 0
let randomico2= 0
let randomico3= 0
let randomico4= 0
let randomico5= 0
let randomico6= 0

function btON(){
randomico1 =Math.round(Math.random() * 60) 
randomico2 =Math.round(Math.random() * 60) 
randomico3 =Math.round(Math.random() * 60) 
randomico4 =Math.round(Math.random() * 60) 
randomico5 =Math.round(Math.random() * 60) 
randomico6 =Math.round(Math.random() * 60) 

numero1.innerHTML = randomico1
numero2.innerHTML = randomico2
numero3.innerHTML = randomico3
numero4.innerHTML = randomico4
numero5.innerHTML = randomico5
numero6.innerHTML = randomico6
}
btn.addEventListener('click', btON)