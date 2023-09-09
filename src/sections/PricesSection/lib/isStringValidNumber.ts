export function isStringValidNumber(value: string): boolean {
    console.log(value);
    return /^\d+$/.test(value);
}
