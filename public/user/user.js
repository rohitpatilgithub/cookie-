const logIn = document.querySelector('#login-form');

async function userLogin(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const email = formData.get('email');
    const password = formData.get('password');
    try {
        const userData = await fetch("http://localhost:8080/login",{
            method : "POST",
            headers : {
                "Content-Type":"application/json",
            },
            credentials : "include",
            body : JSON.stringify({ email , password })
        })
        if(!userData.ok){
            throw new Error('Failed to add new User login')
        }
        window.location.href = "../home.html"
    } catch (error) {
        console.error("Failed to post :", error);
    }
}

logIn.addEventListener('submit',userLogin);