export function splitAndJoinByCapitalLetters(input: string): string {
    const words = input.split(/(?=[A-Z])/);
    return words.join(' ');
}