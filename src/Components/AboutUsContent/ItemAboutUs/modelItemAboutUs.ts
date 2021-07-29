import hf1 from "./img/hf1.png"
import hf2 from "./img/hf2.png"
import hf3 from "./img/hf3.png"


export const itemAbout = [
    {
        id: "1",
        src: hf1,
        head: "Modern Design",
        discription: "Frequency distributions obtained from the automatic text analysis showed that hardly any of the comments made in both the‘Islamic' samplings during the two time periods and the random sampling display obvious emotional coloring"
    },
    {
        id: "2",
        src: hf2,
        head: "Fresh Vegetables",
        discription: "Frequency distributions obtained from the automatic text analysis showed that hardly any of the comments made in both the‘Islamic' samplings during the two time periods and the random sampling display obvious emotional coloring"
    },
    {
        id: "3",
        src: hf3,
        head: "International Menu",
        discription: "Frequency distributions obtained from the automatic text analysis showed that hardly any of the comments made in both the‘Islamic' samplings during the two time periods and the random sampling display obvious emotional coloring"
    },
]

export interface ItemAbout {
    readonly id?: string;
    readonly src?: any;
    readonly head?: string;
    readonly discription?: string;
}