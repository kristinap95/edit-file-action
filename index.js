import * as core from '@actions/core';
import * as github from '@actions/github';

const main = async() => {
    try {
        // getInput(name of input from action.yml file)
        const distFolder = core.getInput('dist_folder');
        //const jsFile = core.getInput('js_file');
        // const GitToken = core.getInput('token');
        // const octokit = new github.getOctokit(GitToken);

        console.log(distFolder)
        
        
    }
    catch(error) {
        core.setFailed(error.message);
    }
}


main();