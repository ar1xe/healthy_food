import burg from "../MenuItem/img/burg.png"
import egg from "../MenuItem/img/egg_masala.png"
import muff from "../MenuItem/img/muffen.png"
import peach from "../MenuItem/img/peach.png"
import salad from "../MenuItem/img/salads.png"
import steak from "../MenuItem/img/steak.png"

export const menuItem = [
    {
        id: "1",
        src: muff,
        title: "Vegie Muffen",
        price: "16$",
        description: "There are many things are needed to start the Fast Food Business.",
    },
    {
        id: "2",
        src: salad,
        title: "Salads",
        price: "12$",
        description: "There are many things are needed to start the Fast Food Business.",
    },
    {
        id: "3",
        src: burg,
        title: "Burger",
        price: "10$",
        description: "There are many things are needed to start the Fast Food Business.",
    },
    {
        id: "4",
        src: steak,
        title: "Delmonico Steak dish",
        price: "14$",
        description: "There are many things are needed to start the Fast Food Business.",
    },
    {
        id: "5",
        src: egg,
        title: "Egg Masala",
        price: "9$",
        description: "There are many things are needed to start the Fast Food Business.",
    },
    {
        id: "6",
        src: peach,
        title: "Peach Melba dish",
        price: "15$",
        description: "There are many things are needed to start the Fast Food Business.",
    },    
]

export interface MenuItemI {
    readonly id?: string;
    readonly src?: any;
    readonly title?: string;
    readonly price?: string;
    readonly description?: string;
}