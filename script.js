//Dark Mood
const toggleBtn = document.getElementById('light_Dark');
const night_Mode_Icon = document.querySelector('.night_Mode_Icon')
const light_mode_Icon = document.querySelector('.light_mode_Icon')
let ifNightEnable = false;
toggleBtn.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-mode');
    if(ifNightEnable){
      night_Mode_Icon.style.display = ""
      light_mode_Icon.style.display = "none"
      ifNightEnable = false;
      console.log("night axtive ")
    }
   
    else{
      night_Mode_Icon.style.display = "none"
      light_mode_Icon.style.display = "flex"
      ifNightEnable = true;
      console.log("Light axtive ")
    };    
});

//login show
const login_Container = document.querySelector('.login-Container');
const main_1 = document.querySelector('.main-1');
function showLogin(){
    login_Container.classList.remove ('login-Container-None');
    loginBtn.classList.remove ('login-Container-None');
    main_1.classList.add ('login-Container-None');
}
if (!localStorage.getItem('user_L')) {
  const user = [
    { username: "rahat", password: "4321" },
    { username: "john", password: "1234" },
    { username: "jane", password: "abcd" },
  ];
  localStorage.setItem('user_L' , JSON.stringify(user));
};



let users_from_Ls = JSON.parse(localStorage.getItem("user_L")) || [];

document.getElementById("loginForm").addEventListener("submit", function (e) {
    const userinput = document.getElementById("username");
    const userinputpass = document.getElementById("password");
    e.preventDefault();
    let matchedUser = "";
    for (let i = 0; i < users_from_Ls.length; i++) {
      const user_element = users_from_Ls[i];
      if (
        user_element.username === userinput.value &&
        user_element.password === userinputpass.value
      ) {
        matchedUser = users_from_Ls[i];
        console.log('matchedUser', matchedUser.username)
        localStorage.setItem('Logged-user-name' , JSON.stringify(matchedUser.username));
        
        // document.querySelector('.account-Name-Text').innerHTML = account_Name_Text;
        break;
      };
    }
    if (matchedUser) {
      console.log("Success Login");
      document.querySelector('.Sign-in-btn').style.display = 'none';
      document.querySelector('.account_icon').classList.remove ('display-None');

      login_Container.classList.add ('login-Container-None');
      loginBtn.classList.add ('login-Container-None');
      main_1.classList.remove ('login-Container-None');
    } else { 
      console.log("Error: Invalid username or password");
    }
});

//account setting 
let account_Name_Text = JSON.parse(localStorage.getItem("Logged-user-name"));
if (account_Name_Text){
    document.querySelector('.account-Name-Text').innerHTML = account_Name_Text;
    document.querySelector('.Sign-in-btn').style.display = 'none';
    document.querySelector('.account_icon').classList.remove ('display-None');
    console.log('set name')
}
else {
  document.querySelector('.Sign-in-btn').style.display = '';
  document.querySelector('.account_icon').classList.add ('display-None');
  console.log('Account Icon removed')
}
//Account Icon Show logic
const account_icon = document.querySelector('.account_icon')
const account_detailes = document.querySelector('.account-Detailes')
account_icon.addEventListener('click', ()=>{
  account_detailes.classList.toggle('display-Flex')
});

account_detailes.addEventListener('click', (e)=>{
  account_detailes.classList.toggle('display-Flex')
});


//register div show
const loginBtn = document.getElementById('login-main');
const registerContainer = document.getElementById('register-Form');
document.getElementById("register-Btn").addEventListener("click", function (e) {
  loginBtn.style.display = 'none';
  registerContainer.style.display = 'flex';
});
document.getElementById('register-Form').addEventListener('submit', (e)=>{
  loginBtn.style.display = '';
  registerContainer.style.display = 'none';
  e.preventDefault();
  const registerUsername = document.getElementById('register-username');
  const registerPassword = document.getElementById('register-password');

  console.log('registerUsername', registerUsername.value);
  console.log('registerPassword', registerPassword.value);
  
  users_from_Ls.push({ username: registerUsername.value, password: registerPassword.value });
  
  localStorage.setItem('user_L' , JSON.stringify(users_from_Ls));
  users_from_Ls = JSON.parse(localStorage.getItem("user_L")) || [];
});