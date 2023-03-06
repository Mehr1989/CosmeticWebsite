import React from "react";
import feature1 from '../image/feature1.jpg'
import feature2 from '../image/feature2.jpg'
import feature3 from '../image/feature3.jpg'








type dataProps ={
    title : string,
    source: string,
    text: string
}

type featureProps ={
    data:dataProps[]
}

export const featureData:featureProps ={data:[
    {
        title: "Guaranteed PURE",
        source:feature1,
        text:"All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients"

    },
    {
        title: "Completely Cruelty-Free",
        source:feature2 ,
        text:'All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients' 
    },

    {
        title: "Ingredient Sourcing",
        source:feature3,
        text:"All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients"
    },



]
}