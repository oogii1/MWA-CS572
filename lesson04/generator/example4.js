const fetch = require('node-fetch');
function wrapperOnFetch(url) {

    return fetch(url).then(res => res.json());
}

function* gitHubDetails(orgName) {
    var url = `https://api.github.com/orgs/${orgName}`;

    var reposUrl = yield wrapperOnFetch(url);
    var repoFullName = yield wrapperOnFetch(reposUrl);
    yield wrapperOnFetch(`https://api.github.com/repos/${repoFullName}/contributors`);
}

var generator = gitHubDetails("aspnet");

generator.next().value.then(function (userData) {
    //Update UI

    return generator.next(userData.repos_url).value.then(function (reposData) {
        return reposData;
    });
}).then(function (reposData) {
    //Update UI
   
    return generator.next(reposData[0].full_name).value.then(function (selectedRepoCommits) {
        //Update UI
        console.log(selectedRepoCommits);
    });
});
