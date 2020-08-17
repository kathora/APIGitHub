//Init Github
const github = new Github;
//Search imput
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) =>{
    const userText = e.target.value;

    if (userText !== ''){
        //Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //Show Alert
            }else{
                //Show profile
            }
        })
    }else{
        // Clear profile
    }
});