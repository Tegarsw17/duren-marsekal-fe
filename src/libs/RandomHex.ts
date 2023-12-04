export const getRandomHexNumber = (length: number): string => {
    const characters = '0123456789ABCDEF';
    return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
}

export const getColorCondition = (condition: string) => {
    if (condition == "good") {
        return { fillColor: 'white', color: '#5af542' }
    } else if (condition == "need attention") {
        return { fillColor: 'white', color: '#fae666' }
    } else {
        return { fillColor: 'white', color: '#f03535' }

    }
}