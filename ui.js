class UI{
    constructor(){
        this.profie = document.getElementById('profile');

    }
    showProfile(user){
        let details = {
            pub_repos: user.public_repos,
            pub_gists: user.public_gists,
            followers: user.followers,
            following: user.following,
            company: user.company,
            blog: user.blog,
            since: user.created_at,
            location: user.location
        };
        console.log(details)

       let time = details.since;
       let T = time.split(':')
       let rT = T[0].split('T');
       const date = rT[0];


    //    loop through the object
for (let item in details) {
  if(details[item] === null || details[item] === ''){
    details[item] = 'Sorry! no info for this' 
  }
}






        
        this.profie.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3 d-flex flex-column align-items-center"> 
                    <img class="img-fluid mb-2 rounded-circle border border-secondary" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge bg-primary">Public Repos: ${details.pub_repos}</span>
                    <span class="badge bg-secondary">Public Gist: ${details.pub_gists}</span>
                    <span class="badge bg-success">Followers: ${details.followers}</span>
                    <span class="badge bg-info">Following: ${details.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${details.company}</li>
                        <li class="list-group-item">Website/Blog: ${details.blog}</li>
                        <li class="list-group-item">Location: ${details.location}</li>
                        <li class="list-group-item">Been a member of Github since: ${date}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }
    showRepos(repos){
        let output = '';
        repos.forEach(repo => {
            output +=`
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" targer="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge bg-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
        });
        // output repos
        document.getElementById("repos").innerHTML = output;
    }

    clearProfile(){
        this.profie.innerHTML = ''
    }
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    showAlert(message, className){
        // clear any visible alert
        this.clearAlert()
        const div = document.createElement('div');
        div.className = className;
        // text
        div.appendChild(document.createTextNode(message));

        //get parent
        const container = document.querySelector('.searchContainer');

        // get search box

        const search = document.querySelector('.search');

        container.insertBefore(div, search)

        // time out
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }
}