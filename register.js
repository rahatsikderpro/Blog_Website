//register
const loginBtn = document.getElementById('login-main');
const registerContainer = document.getElementById('register-Form');
document.getElementById("register-Btn").addEventListener("click", function (e) {
  
  loginBtn.style.display = 'none';
  registerContainer.style.display = 'flex';
});

document.getElementById('register-Form').addEventListener('submit', (e)=>{

  
  e.preventDefault();


    let matchedUser1;
    const registerUsername = document.getElementById('register-username');
    const registerPassword = document.getElementById('register-password');
  for (let i = 0; i < users_from_Ls.length; i++) {
      const user_element1 = users_from_Ls[i];
    if (user_element1.username === registerUsername.value) {
        console.log('username already taken')
        matchedUser1 = true;
        break;
      }
      else{
        matchedUser1 = false;
      }
   
    }
    if(!matchedUser1){
         
        console.log('registerUsername', registerUsername.value);
        console.log('registerPassword', registerPassword.value);
        users_from_Ls.push({ username: registerUsername.value, password: registerPassword.value });
        
        localStorage.setItem('user_L' , JSON.stringify(users_from_Ls));
        users_from_Ls = JSON.parse(localStorage.getItem("user_L")) || [];
        loginBtn.style.display = '';
        registerContainer.style.display = 'none';
      };

 
    
  
});