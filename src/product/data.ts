import React from "react";

type dataProps ={
    id: number,
    title : string,
    source: string
    text:string
}

type productProps ={
    data:dataProps[]
}

export const productData:productProps ={data:[
    {
        id:1,
        title: "Pich Mask Bioaqua",
        source:"https://www.elfystore.com/wp-content/uploads/2022/03/photo_2021-10-06_21-43-27.jpg",
        text:"wrie oejgoik ogkoikgo kgogrokgho ogohgoh"

    },
    {   id:2,
        title: "Hair Serum Glis",
        source:"data:image/jpeg;base64,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",
        text:"wrie oejgoik ogkoikgo kgogrokgho ogohgoh ryyhyh tyhtyh"
    },

    {  
         id:3,
        title: "Eye Cream Olay",
        source:"https://images.ctfassets.net/81lwm2as71w5/4mSOdPMMI2am9Rab7mI4f3/8a223399d829f38a588d9efadceef526/f1.jpg",
        text:"wrie ogkoikgo kgogrokgho ogohgoh ryyhyh tyhtyh"

    },
    {   id:4,
        title:"Sun Protection",
        source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHO3Y96n0ynrS22cOcdVybU1verQCKrRWXA&usqp=CAU",
        text:"wrie ogkoikgo kgogrokgho ogohgoh ryyhyh tyhtyh"

    },

    {   id:5,
        title:"Facial Cleanser",
        source: "https://img.loccitane.com/ocms/img/P.aspx?l=en-IE&s=500&e=png&name=gel-to-foam-facial-cleanser-loccitane&id=11GM200I19_texture&v=2&nodef=true",
        text:"wrie ogkoikgo kgogrokgho ogohgoh ryyhyh tyhtyh"

    },

    {   id:6,
        title:"Lipstick Safora",
        source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOflpyh-XIghpKj4gWP3J3KQkEJNk-lAzyg&usqp=CAU",
        text:"wrie ogkoikgo kgogrokgho ogohgoh ryyhyh tyhtyh"

    },
    {   id:7,
        title:"Body Wash Dove",
        source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiA-PH7YAz-wCca6FFxiR01GPCqAFJjCwgkg&usqp=CAU",
        text:"wrie ogkoikgo kgogrokgho ogohgoh ryyhyh tyhtyh"

    },
    {   id:8,
        title:"Hair Mask",
        source: "data:image/jpeg;base64,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",
        text:"wrie ogkoikgo kgogrokgho ogohgoh ryyhyh tyhtyh"

    },
]
}