import React from "react";
import group1 from '../image/group1.jpg'
import group2 from '../image/group2.jpg'
import group3 from '../image/group3.jpg'





type dataProps ={
    title : string,
    source: string
}

type productProps ={
    data:dataProps[]
}

export const productData:productProps ={data:[
    {
        title: "Newest Products",
        source:group1

    },
    {
        title: "International Products",
        source:group2  
    },

    {
        title: "Summer Collection",
        source:group3
    },



]
}