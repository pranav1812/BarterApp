const form=document.querySelector('insert');
console.log(insert);
document.querySelector('#subbtn').addEventListener('click',(e)=>{
    console.log('clicked')
    var category=document.querySelector('.cat').value;
    //var docId=document.querySelector('.');
    var buyingPrice=document.querySelector('.bp').value;
    var age=document.querySelector('.age').value;
    var description=document.querySelector('.des').value;
    e.preventDefault();
    db.collection(category).doc('oldmonk').set({
        age: age,
        buyingPrice: buyingPrice,
        description: description
    }).then(()=>{
        console.log(`kuckk ni ho raha`)
        //console.log(`document successfully written with document id ${docId}`)
    }).catch(err=>console.log(err))
        .finally(console.log('something\'s done'))

})
