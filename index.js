const core   = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/action");


const main = async() => {
    try {
        // getInput(name of input from action.yml file)
        const distFolder = core.getInput('dist_folder');
        //const jsFile = core.getInput('js_file');
        // const GitToken = core.getInput('token');
        // const octokit = new github.getOctokit(GitToken);

        const octokit = new Octokit({
            auth: 'personal-access-token123'
          })

        await octokit.request('GET /repos/{owner}/{repo}/actions/artifacts', {
            owner: 'kristinap95',
            repo: 'vue-chat'
          })
        console.log(octoKit)
    }
    catch(error) {
        core.setFailed(error.message);
    }
}


main();