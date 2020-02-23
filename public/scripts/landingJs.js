const loggedInLinks=document.querySelectorAll('.loggedIn');
const loggedOutLinks=document.querySelectorAll('.loggedOut');
console.log(loggedInLinks)
console.log(loggedOutLinks)


console.log('in')
M.AutoInit();
const setupUI=(user)=>{
    if(user){
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
        console.log(user);
        // sessionStorage.setItem("user",JSON.stringify(user));
    }
    else{
        loggedOutLinks.forEach(item => item.style.display = 'block');
        loggedInLinks.forEach(item => item.style.display = 'none');
    }
}


document.addEventListener('DOMContentLoaded', function(e) {
    const elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
    console.log('a');
});


const name= 'ABC';
const email='abc@gmail.com';
const phNum='10101';
const pinCode='10001';
document.querySelector('li.accBtn').addEventListener('click',function(e){
   console.log(e);
//    LoggedIn();
    const profileDiv = document.querySelector('.user-profile');

    const profile = `
    <h5 >Name:${name}</h5>
    <h5 >Email:${email}</h5>
    <h5 >Phone Number:${phNum}</h5>
    <h5 >Pincode:${pinCode}</h5>
    `

    profileDiv.innerHTML = profile;
    sessionStorage.setItem("modal", document.querySelector('.modal').parentElement.innerHTML);
});
document.querySelector('.signOut-btn').addEventListener('click',function(){
   document.querySelector('.user-profile').innerHTML = '';
   console.log('signedOut');
});


   