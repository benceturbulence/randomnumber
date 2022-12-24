export function getRandomInt(min, max) {
        min = Math.ceil(parseFloat(min));
        max = Math.floor(parseFloat(max));
        return Math.floor(Math.random() * (max - min + 1)) + min;
}
