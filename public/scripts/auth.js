auth.onAuthStateChanged((user)=>{
    if(user){
        db.collection('users').onSnapshot((snapshop)=>{
            setupUI(user);
        },err=>console.log(err))
    }
    else{
        setupUI();
    }
})


// signup
var signupForm=document.getElementById('signupModal');
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    // getting user info
    var email= signupForm['uEmail'].value;
    var password= signupForm['uPass'].value;

    // create user with email and password
    auth.createUserWithEmailAndPassword(email, password)
        .then(cred=>{
            console.log('user created')
            return db.collection('users').doc(cred.user.uid).set({
                name: signupForm['uName'].value,
                mobileNum: signupForm['uPhNum'].value

            });
        }).then(()=>{
            var modal = document.querySelector('#modal-signup');
            M.Modal.getInstance(modal).close();
            signupForm.reset();
        });
});

// logout
//-----------------------------------------------------
var logout=document.getElementById('logout');
logout.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut();
    console.log(user)
})
//-----------------------------------------------------
// login

var loginForm=document.getElementById('loginForm');
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    //getting user info
    var email=loginForm['email'].value;
    var password=loginForm['pass'].value;

    //logging user in
    auth.signInWithEmailAndPassword(email, password)
        .then(cred=>{
            var modal = document.querySelector('#modal-login');
            M.Modal.getInstance(modal).close();
            loginForm.reset();
        });
});
