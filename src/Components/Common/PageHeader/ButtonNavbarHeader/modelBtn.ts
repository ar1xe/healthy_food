export const buttonsHeader = [
    {
        id: "1",
        title: "Home",
        url: "/mainPage"
    },
    {
        id: "2",
        title: "About us",
        url: "/aboutUs"
    },
    {
        id: "3",
        title: "Contact us",
        url: "/contactUs"
    },
]

export interface BtnHeader {
    readonly id?: string;
    readonly title?: string;
    readonly url?: string;
}