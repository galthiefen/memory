import { useState } from "react"
import Card from "./Card"

function Cards () {
    const [items, setItems] = useState ([
        { id: 1, img: '/img/01.png', stat: ""},
        { id: 1, img: '/img/01.png', stat: ""},
        { id: 2, img: '/img/02.png', stat: ""},
        { id: 2, img: '/img/02.png', stat: ""},
        { id: 3, img: '/img/03.png', stat: ""},
        { id: 3, img: '/img/03.png', stat: ""},
        { id: 4, img: '/img/04.png', stat: ""},
        { id: 4, img: '/img/04.png', stat: ""},
        { id: 5, img: '/img/05.png', stat: ""},
        { id: 5, img: '/img/05.png', stat: ""},
        { id: 6, img: '/img/06.png', stat: ""},
        { id: 6, img: '/img/06.png', stat: ""},
        { id: 7, img: '/img/07.png', stat: ""},
        { id: 7, img: '/img/07.png', stat: ""},
        { id: 8, img: '/img/08.png', stat: ""},
        { id: 8, img: '/img/08.png', stat: ""},
    ].sort(() => Math.random() - 0.5))

function handleClick(id: any) {
    alert(id)
}

    return (
        <div className="container">
            {/* { items.map( (item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick}/>
            ) ) } */}
        </div>

    )
}
export default Cards