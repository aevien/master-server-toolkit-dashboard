import { ModuleInfo } from "./interfaces";

export function splitAndJoinByCapitalLetters(input: string): string {
    const words = input.split(/(?=[A-Z])/);

    if (words.length > 0) {
        let word = words[0]
        word = `${word[0].toUpperCase()}${word.substring(1, word.length)}`
        words[0] = word
    }

    return words.join(' ');
}

function dependanciesToButtons(dependancies: string[] | undefined | null): string {
    let result: string = ''

    if (dependancies) {
        for (let i = 0; i < dependancies.length; i++) {
            const dependancy = dependancies[i]
            result += `
            <a class="btn btn-primary btn-sm" href="#/module/${dependancy.toLowerCase()}?title=${dependancy}" role="button">${dependancy}</a>
            `
        }
    }

    return result
}

export function mstModuleBaseInfo(module: ModuleInfo | undefined | null): string {
    if (module) {
        return `<table class="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <th width="300" scope="row">
                            Optional dependencies
                        </th>
                        <td>${dependanciesToButtons(module?.optionalDependencies)}</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Dependencies
                        </th>
                        <td>${dependanciesToButtons(module?.dependencies)}</td>
                    </tr>
                </tbody>
            </table> `
    } else {
        return ''
    }
}