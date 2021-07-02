import { Customer } from "./customer.models";

let costomers: Customer[] = [
    {
        id: 1,
        name: "Burger",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    {
        id: 2,
        name: "Pizza",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    {
        id: 3,
        name: "Tea",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
];

export const find = async (id: number) => costomers.find(i=>i.id == id)

export const findAll = async () => costomers