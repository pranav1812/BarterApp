const ulDiv = document.querySelector('.collection.products')
const min =0;
const max =100;
const step =1;


const title = 'abc';
const product ={
     img:'img/jbl.jpg',
     pName:'JBL speaker',
     pDescription : 'Speaker', 
     pVal : '100'

}

const product2 ={
     img:'img/k20.png',
     pName:'Phone -k20',
     pDescription : 'phone', 
     pVal : '121'

}
// const title = 'abc';
// const img='img/jbl.jpg';
// const pName='JBL speaker';
// const pDescription = 'Speaker'; 
// const pVal = '100'; 

const products= [
    product,product,product,product2,product
];


const catTitle= document.querySelector('.category');

catTitle.innerHTML = title;
products.forEach(element=>{
    const list = `
    <li class="collection-item avatar">
    <img src="${element.img}" alt="" class="circle">
    <span class="title">${element.pName}</span>
    <p>
    ${element.pDescription}
    </p>
    <span>${element.pVal}</span><br>
    <a href="#prodModal" class="btn btn-modal  modal-trigger">More Info</a>
    </li>
    
    
    `

    ulDiv.innerHTML +=list;
});


//search

const search = document.querySelector('#searchProds');

search.addEventListener('keyup',(e)=>{
       
    const userText = e.target.value.toLowerCase();
    if(userText !== ''){
        
        document.querySelectorAll('.collection-item').forEach(function(prod){
            // console.log();
            if(prod.firstElementChild.nextElementSibling.textContent.toLowerCase().indexOf(userText) !=-1){
                prod.style.display='block';
                
            }else{
                prod.style.display='none';
                
            }
        });
    }else{
            document.querySelectorAll('.collection-item').forEach(function(prod){
                    prod.style.display='block';
                    
           
            });
        
    }
});
document.addEventListener('DOMContentLoaded', function(e) {
    const elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
    console.log('a');
});

document.querySelector('.products').addEventListener('click',(e)=>{
    let a;
    if(e.target.parentElement.classList.contains('collection-item')){
        
        // console.log(e.target);
        // console.log();
        const prod =e.target.parentElement.firstElementChild.nextElementSibling.textContent;

        const p= products.find(ele => ele.pName === prod);
        // console.log(p);
        const modalDetails= `
    <h5>Name:${p.pName}</h5>
    <h5>Description:${p.pDescription}</h5>
   
    <form action="#">
    <p class="range-field">
      <input type="range" id="test5" min="${min}" max="${max}" />
    </p>

  </form>
    
    `
    document.querySelector('.modal-content').innerHTML=modalDetails;
   
    }
   

});