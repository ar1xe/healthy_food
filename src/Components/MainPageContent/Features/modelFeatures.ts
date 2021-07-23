import Group1 from "../Features/img/Group1.png"
import Group2 from "../Features/img/Group2.png"
import Group3 from "../Features/img/Group3.png"

export const itemsFeatures = [
    {
        id: "1",
        src: Group1,
        title: "Quality Food",
        description: "It can be a very secure path to earn good money and make you very successful creative entrepreneur."
    },
    {
        id: "2",
        src: Group2,
        title: "Food Delivery",
        description: "Delivery to any part of the city within two hours, payment in any way convenient for you."
    },
    {
        id: "3",
        src: Group3,
        title: "Super Taste",
        description: "All dishes are prepared at the time of receipt of the order.No frozen food, only fresh ingredients."
    },
]

export interface ItemFeatures {
    readonly id?: string;
    readonly src?: any;
    readonly title?: string;
    readonly description?: string;
}