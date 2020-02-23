const form=document.querySelector('insert');
console.log(insert);
document.querySelector('#subbtn').addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('clicked')
    var category=document.querySelector('.cat').value;
    //var docId=document.querySelector('.');
    var buyingPrice=document.querySelector('.bp').value;
    var age=document.querySelector('.age').value;
    var description=document.querySelector('.des').value;
    var subCategory=document.querySelector('.subcat').value;
    console.log(subCategory);
    db.collection('dep_rates').doc(category).get().then(doc=>{
        window.rate=doc.data().rate;
        window.freq=doc.data().freq;
        //console.log(window.freq);
        //console.log(rate);

    })



    //console.log(window.freq);
    var priceRange=costCal(buyingPrice,22,age,1);
    console.log(priceRange[0]);
    db.collection(category).doc(subCategory).set({
        age: age,
        buyingPrice: buyingPrice,
        description: description,
        lowestEstimate: Math.trunc(priceRange[0]),
        highestEstimate: Math.trunc(priceRange[1])
     }).then(()=>{
        console.log(`kuckk ni ho raha`)
        //console.log(`document successfully written with document id ${docId}`)
    }).catch(err=>console.log(err))
        .finally(console.log('something\'s done'))

})

document.addEventListener('DOMContentLoaded', function(e) {
    const elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
    console.log('a');
});
console.log(sessionStorage.getItem('modal'));
document.querySelector('.profileModal').innerHTML = sessionStorage.getItem('modal');

const costCal=(p,r,t,n)=>{
    var newcost=p*Math.pow((1-r/100),n*t);
    var low=newcost*(1-.05);
    var high=newcost*(1+.05);
    var arr=[low,high];
    return arr;
}
