export const getRandomHexNumber = (length: number): string=> {
    const characters = '0123456789ABCDEF';
    return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
}