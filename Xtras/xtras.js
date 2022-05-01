const random = Math.random;
const floor = Math.floor;

const getRandomNumber = () => {
    return floor(random() * 11);
} 

setInterval(() => {
    const num = getRandomNumber();

    console.log(num);
}, 500);