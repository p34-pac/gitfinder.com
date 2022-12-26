//initialize classes from files
const github = new Github();
const ui = new UI();


// search input
const userinput = document.getElementById('userIn');
const searchUser = document.getElementById('searchUser');


// search input event listener
searchUser.addEventListener('click', ()=>{
    //get text
    const userText = userinput.value;

    if(userText !== ""){
        // make http call
        github.getUser(userText)
            .then(data =>{
                if(data.profile.message === 'Not Found'){
                    // show error
                    ui.showAlert('user not found', 'alert alert-danger')
                }else{
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);

                
                }
            })
        
    }else if(userText === ''){
        //clear profile 
        ui.clearProfile();
    }
})