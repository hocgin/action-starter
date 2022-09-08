import core from '@actions/core';
import github from '@actions/github';
import {
    PullRequestEvent, PushEvent,
    ReleaseEvent,
} from '@octokit/webhooks-definitions/schema'


enum OUTPUT {
}


export async function run() {
    // const octokit = getOctokit(process.env.GITHUB_TOKEN!, {});
    let context = github.context;

    // TODO 写你的代码..
}
