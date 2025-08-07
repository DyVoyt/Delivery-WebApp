import Card from "./card.js"
import { EditCard } from "./editCard.js";

const deliveryArr = [
    new EditCard("Владислав", "п-т.Партизанский д.32", 8, "delivered" ),
    new EditCard("Люжмила", "ул.Пролетарская д.34", 3, "delivered"),
    new EditCard("Максим", "ул.Красноармейская д.3 кв.10", 5, "delivered")
]

const app = document.querySelector('.app');

for(let key in deliveryArr){
   
    app.append(deliveryArr[key].getCard(key))
}



