import { getInput, setFailed } from '@actions/core';

const main = async() => {
    try {
        // getInput(name of input from action.yml file)
        const distFolder = getInput('dist_folder');
        //const jsFile = core.getInput('js_file');
        // const GitToken = core.getInput('token');
        // const octokit = new github.getOctokit(GitToken);

        console.log(distFolder)
        
    }
    catch(error) {
        setFailed(error.message);
    }
}


main();