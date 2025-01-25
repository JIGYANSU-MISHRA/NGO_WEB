let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.login-title');
let underline = document.querySelector('.underline');

signInBtn.addEventListener('click',()=>{
	nameField.style.maxHeight='0';
    title.innerHTML = 'Sign In';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
});
signUpBtn.addEventListener('click',()=>{
	nameField.style.maxHeight='60px';
    title.innerHTML = 'Sign Up';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
});

// Side bar Access at the time of login

function showSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'flex'
  }
  function hideSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'none'
  }


// Optional: Close sidebar when clicking outside of it
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.style.display = 'none';
    }
});