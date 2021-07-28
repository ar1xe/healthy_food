import hf1 from "./img/hf1.png"
import hf2 from "./img/hf2.png"
import hf3 from "./img/hf3.png"


export const itemAbout = [
    {
        id: "1",
        src: hf1,
        head: "Modern Design",
        discription: "Dictum imperdiet lacinia nec hac faucibus. Efficitur sit sit orci, odio. Imperdiet dapibus ultricies. Si."
    },
    {
        id: "2",
        src: hf2,
        head: "Fresh Vegetables",
        discription: "Molestie quis, malesuada ex. Imperdiet hac quam, adipiscing et ornar."
    },
    {
        id: "3",
        src: hf3,
        head: "International Menu",
        discription: "Venenatis velit molestie mattis justo luctus tempus sapien aenean lectus risus tempus ipsum interdum lectus dui ut."
    },
]

export interface ItemAbout {
    readonly id?: string;
    readonly src?: any;
    readonly head?: string;
    readonly discription?: string;
}