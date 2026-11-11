// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtx7rMBKL6OJUpVoXaAkoK8eYvErCfOy8",
  authDomain: "movies-510f4.firebaseapp.com",
  databaseURL: "https://movies-510f4-default-rtdb.firebaseio.com",
  projectId: "movies-510f4",
  storageBucket: "movies-510f4.firebasestorage.app",
  messagingSenderId: "615898742685",
  appId: "1:615898742685:web:b2cb9948b793b24a4db974"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.addEventListener("DOMContentLoaded", function() {
    const registerBtn = document.getElementById("register-btn");
    const loginBtn = document.getElementById("login-btn"); 
    const forgotPasswordBtn = document.getElementById("forgot-pass-btn");
    if (registerBtn) {
        registerBtn.addEventListener("click", function() {
            const email = document.getElementById("user-email").value;
            const user = document.getElementById("user-name").value;
            const password = document.getElementById("user-password").value;
            localStorage.setItem("email", email);
            localStorage.setItem("user", user);

            auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                alert("Registration successful. Welcome " + userCredential.user.email);
                window.location.href = "event_selection.html"; //redirecting to next page
            })
            .catch(error => {
                alert(error.message);
            });
        });
    }
    if (loginBtn) {
        loginBtn.addEventListener("click", function() {
            const user_name = document.getElementById("user-name").value;
            const email = document.getElementById("user-email").value;
            const password = document.getElementById("user-password").value;
            localStorage.setItem("user_name", user_name);//saves email in data base so its saved when page--> refreshed or closed
            localStorage.setItem("email", email); //saves email in data base so its saved when page--> refreshed or closed
            auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                alert("Login successful. Welcome back, " + userCredential.user.email);
                window.location.href = "event_selection.html"; //also redirecting to next page
            })
            .catch(error => {
                alert(error.message);
            });
        })
    }
if (forgotPasswordBtn) {
    forgotPasswordBtn.addEventListener("click", function() {
        const email = document.getElementById("user-email").value;
        if (email) {
            auth.sendPasswordResetEmail(email)
                .then(() => {
                    alert("Password reset email sent.");
                })
                .catch(error => {
                    alert(error.message);
                });
        }
        else {
            alert("Enter your email address.");
        }
    });
}
});