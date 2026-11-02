const lightColors = [
    "lawngreen",
    "orangered",
    "gold",
    "midnightblue",
    "rgba(229, 32, 193, 0.8)"
];

const lights = document.querySelectorAll('.light');

const changeColors = () => {
    const randomColor = () => {
        return Math.floor(Math.random() * lightColors.length)
    }
    setInterval(() => {
        for (const color of lights) {
            color.style.backgroundColor = lightColors[randomColor()]
        }
    }, 1500)
};
changeColors();
