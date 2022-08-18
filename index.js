const core   = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/action");
const { createActionAuth } = require("@octokit/auth-action");
// or: import { createActionAuth } from "@octokit/auth-action";

const main = async() => {
    try {
        // getInput(name of input from action.yml file)
        const distFolder = core.getInput('dist_folder');
        const githubToken = core.getInput('token');
        //const jsFile = core.getInput('js_file');
        // const GitToken = core.getInput('token');
        // const octokit = new github.getOctokit(GitToken);

        const auth = createActionAuth();
        const authentication = await auth();

        const octokit = new Octokit({
            auth: githubToken,
          })

        const octokitAPI = await octokit.request('GET /repos/{owner}/{repo}/actions/artifacts', {
            owner: 'kristinap95',
            repo: 'vue-chat'
          })
        console.log("API results = ", octokitAPI);
    }
    catch(error) {
        core.setFailed(error.message);
    }
}


main();