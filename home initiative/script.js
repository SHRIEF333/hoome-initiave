function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username == "shifo" && password == "123"){
       
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'shifo.html';
    }
    else if (username == "ahmed" && password == "1233")

    {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'dad.html';
    
    }
    else if (username == "randa" && password == "122")
    {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'mum.html';
    }
    else if (username == "nancy" && password == "112")
    {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'sister.html';
    }
     else {
        alert('error try again');
    }}