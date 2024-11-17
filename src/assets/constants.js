import Pink from "./img/pink2.jpg"
import Black from "./img/black.jpg"
import Yellow from "./img/yellow.jpg"

export const themeProps = {
    "pink": {
        id: "pink",
        img: Pink,
        themeColor: "#d1abc0",
        theme: {
            '--background-color': '#dddcdd',
            '--card-color': '#d7c3d3',
            '--text-color': '#333',
            '--padding': '20px',
            '--header-font-color': '#F7F9F2',
            '--contact-text-color': '#333',
            '--complementary-color': '#d1abc0'
        }
    },
    "black": {
        id: "black",
        img: Black,
        themeColor: "#010e26",
        theme: {
            '--background-color': '#010e26',
            '--card-color': '#f6fbec',
            '--text-color': '#333',
            '--padding': '20px',
            '--header-font-color': '#F7F9F2',
            '--contact-text-color': '#f6fbec',
            '--complementary-color': '#E2F2C2'
        }
    },
    "yellow": {
        id: "yellow",
        img: Yellow,
        themeColor: "#FFDE95",
        theme: {
            '--background-color': '#FFF7E6',
            '--card-color': '#FFDE95',
            '--text-color': '#333',
            '--padding': '20px',
            '--header-font-color': '#FFF7E6',
            '--contact-text-color': '#333',
            '--complementary-color': '#FFC544'
        }
    }
}