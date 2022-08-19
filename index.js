const core   = require('@actions/core');
const { Octokit } = require("@octokit/action");

const main = async() => {
    try {
        // getInput(name of input from action.yml file)
        const githubToken = core.getInput('token');

        const octokit = new Octokit({
            auth: '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',
          })
        const octokitAPI = await octokit.request('GET /repos/{owner}/{repo}/actions/artifacts', {
            owner: process.env.OWNER,
            repo:  process.env.REPOSITORY,
          })
        console.log("API results = ", octokitAPI);
    }
    catch(error) {
        core.setFailed(error.message);
    }
}


main();