import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import $ from 'jquery';

const Card = (Props: any) => {
    const bgGray = () => {
        $(".container").addClass("bgGray")
    }
    const removeGray = () => {
        $(".container").removeClass("bgGray")
    }

    const turnBlack = () => {
        $(".container").addClass("bgblack")
    }
    const removeBlack = () => {
        $(".container").removeClass("bgblack")
    }
    

    if (Props.isEven){
        return (
            <>
                <div className='container' onMouseEnter={turnBlack} onMouseLeave={removeBlack}>
                    <div className='CardTitle'>
                        <h2><b> {Props.Title}</b></h2>
                    </div>
                    <div className='CardImg'>
                        <Image priority src={Props.Img} width={200} height={150} alt="Peacock Image"></Image>
                    </div>
                    <div className='CardDesc'>
                        <p>{Props.Desc}</p>
                    </div>
                </div>
            </>
        )
    } else {
        return (    
            <>
                <div className='container' onMouseEnter={bgGray} onMouseLeave={removeGray}>
                    <div className='CardImg'>
                        <Image priority src={Props.Img} width={Props.w} height={150} alt="Peacock Image"></Image>
                    </div>
                    <div className='CardTitle'>
                        <h2><b> {Props.Title}</b></h2>
                    </div>
                    <div className='CardDesc'>
                        <p>{Props.Desc}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Card