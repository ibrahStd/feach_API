let theInput = document.querySelector(".get-repo input");
let getButton = document.querySelector(".get-button");
let repoData = document.querySelector(".show-data");

getButton.onclick = function() {
    getRepo();
}

function getRepo() {
    if (theInput.value == "") {
        repoData.innerHTML = "<span>Please write Github Username.</span>"
    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)

        .then((Response) => Response.json())

        .then((repos) => {

            repoData.innerHTML = ''

            repos.forEach(repo => {
                let mainDiv = document.createElement("div");
                let repoName = document.createTextNode(repo.name);

                mainDiv.appendChild(repoName);

                let theUrl = document.createElement('a');

                let theUrlText = document.createTextNode(`Visit`);

                theUrl.appendChild(theUrlText);

                theUrl.href = `https://gitHub.com/${theInput.value}/${repo.name}`;

                theUrl.setAttribute(`target`, `_blank`);

                mainDiv.appendChild(theUrl);

                let starsSpan = document.createElement('span');

                let startsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

                starsSpan.appendChild(startsText);

                mainDiv.appendChild(starsSpan);

                mainDiv.className = 'repo-box';

                repoData.appendChild(mainDiv);
            });
        });
    }
}