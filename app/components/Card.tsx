import React from 'react'
import Image from 'next/image'

const Card = (Props: any) => {
    
    return (
        <>
            <div className={`container ${Props.isEven}`}>
                <div className='CardTitle'>
                    <h2><b> {Props.Title}</b></h2>
                </div>
                <div className='CardImg'>
                    <Image priority src={Props.Img} width={Props.isEven ? 200 : 270} height={150} alt="Peacock Image"></Image>
                </div>
                <div className='CardDesc'>
                    <p>{Props.Desc}</p>
                </div>
            </div>
        </>
    )
}

export default Card
