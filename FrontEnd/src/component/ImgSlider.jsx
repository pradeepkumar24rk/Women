import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {

    let setting={
        dots:true,
        infinte:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
    }


    const imgs=[
      { img:"/images/slider-1.jpg"},
      { img:"/images/slider-2.jpeg"},
      { img:"/images/slider-3.jpeg"},
      { img:"/images/slider-4.jpeg"},

  ]


  return (
    <Carousel  {...setting}>
      {imgs.map((data)=>(<Wrap>
        <img src={data.img} alt="" srcset="" />
      </Wrap>))}
      
    </Carousel>
  )
}

export default ImgSlider


const Carousel= styled(Slider)`
margin-top:20px;
ul li button{
    &:before{
        font-size:10px;
        color:rgb(171, 160, 150);
    }
}

li.slick-active button:before{
    color:white;
}

.slick-list{
    overflow:visible;
}
button{
    z-index:-1;
}

`
const Wrap =styled.div`
cursor:pointer;
img{
    border :4px solid transparent;
    border-radius:2px;
    width:100%;
    height:600px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover{
        border:4px solid rgba(249,249 ,249,0.8)
    }
}
`