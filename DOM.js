let totalPrice = document.getElementsByClassName('total-price')
console.log(totalPrice)
function UpdateTotalPrice(){
    let prices = document.getElementsByClassName('price')
    let sum =0;
    for(let i=0;i<prices.length;i++){
        sum += Number(prices[i].innerHTML)

    }
    totalPrice[0].innerHTML = sum 
}

const PlusBtn = document.getElementsByClassName('plusbtn')
for (let i=0;i<PlusBtn.length;i++){
    PlusBtn[i].addEventListener('click',function(e){
         let qte = e.target.nextElementSibling
         qte.innerHTML = Number(qte.innerHTML) +1
         let Prix_unitaire = e.target.nextElementSibling.nextElementSibling.nextElementSibling
         let PrixTotalParArticle = e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
        
         PrixTotalParArticle.innerHTML = +(Prix_unitaire.innerHTML) * +(qte.innerHTML)
         UpdateTotalPrice()

    })

}
const moinBtn = document.getElementsByClassName('-btn')
for (let i=0;i<moinBtn.length;i++){
    moinBtn[i].addEventListener("click",function(E){
let qte = E.target.previousElementSibling
if(qte.innerHTML>0){
    qte.innerHTML = Number(qte.innerHTML) -1
}
let Prix_Unitaire = E.target.nextElementSibling
let PrixTotalParArticle =  E.target.nextElementSibling.nextElementSibling.nextElementSibling
PrixTotalParArticle.innerHTML = +(Prix_Unitaire.innerHTML) * +(qte.innerHTML)
UpdateTotalPrice()
})
}



var btn = document.getElementsByClassName('DeleteBtn')
for (let i=0 ;i<btn.length;i++) {
    btn[i].addEventListener('click',function(ev){
        btnclicked = ev.target.parentElement.remove()
        UpdateTotalPrice()
    })
}


var heart = document.getElementsByClassName('ad')
for (let i=0 ; i<heart.length;i++) {
    heart[i].addEventListener('click',function(){
        let h=document.getElementsByClassName('fas fa-heart')
        h[i].style.color='red'
    })
}