// //login show
// const login_Container = document.querySelector('.login-Container');
// const main_1 = document.querySelector('.main-1');
// function showLogin(){
//     login_Container.classList.remove ('login-Container-None');
//     loginBtn.classList.remove ('login-Container-None');
//     main_1.classList.add ('login-Container-None');
// }

// //login logic
// if (!localStorage.getItem('user_L')) {
//   const user = [
//     { username: "rahat", password: "4321" },
//     { username: "john", password: "1234" },
//     { username: "jane", password: "abcd" },
//   ];
//   localStorage.setItem('user_L' , JSON.stringify(user));
// };
// let users_from_Ls = JSON.parse(localStorage.getItem("user_L")) || [];
// document.getElementById("loginForm").addEventListener("submit", function (e) {
//     const userinput = document.getElementById("username");
//     const userinputpass = document.getElementById("password");
//     e.preventDefault();
//     let matchedUser;
//     for (let i = 0; i < users_from_Ls.length; i++) {
//       const user_element = users_from_Ls[i];
//       if (
//         user_element.username === userinput.value &&
//         user_element.password === userinputpass.value
//       ) {
//         matchedUser = users_from_Ls[i];
//         localStorage.setItem('logged_user' , JSON.stringify(matchedUser.username));
//         break;
//       };
//     }
//     if (matchedUser) {
      
//       console.log("success Logged in");
//       // login_Container.classList.add ('login-Container-None');
//       // loginBtn.classList.add ('login-Container-None');
//       // main_1.classList.remove ('login-Container-None');
//     } else {
      
//       console.log("Error: Invalid username or password");
//     }
// });

