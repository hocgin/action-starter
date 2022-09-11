import {run} from "./core";
import * as core from "@actions/core";

export interface Inputs {
}

export interface Outputs {

}

let getInput = (): Inputs => ({
    // TODO
})

let handleOutput = (output: Outputs) => {
    // TODO
};

try {
    handleOutput(run(getInput()))
} catch (error: any) {
    core.setFailed(error?.message);
}

