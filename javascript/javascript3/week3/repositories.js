let repos = document.getElementById("repos");
let usersName = ['FlorentinaPetica', 'JiuTak', 'shabnam-ght']
let urls = [];
usersName.forEach(userName => urls.push(fetch(`https://api.github.com/search/repositories?q=user:${userName}`)))

let getUsers = () => {
    Promise.all(urls)
        .then((responses) => {
            let r=responses.map((response) => response.json());
            console.log(r);
        
        r.forEach((element) => {
                const li = document.createElement("li");


                li.innerHTML = `
    <li>${r[0].owner.login}\'s repositories</li>
    <ul>${usersRepos}</ul>
    `;

                repos.append(li);
            });
        })
    
        .catch(function(error) {

            console.log(error);
        });
};

getUsers();
