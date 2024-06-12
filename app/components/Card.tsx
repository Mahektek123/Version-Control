import React from 'react'
import Image from 'next/image'

const Card = (Props: any) => {
    const container = document.getElementsByClassName("container")
    let ele = container[0] as HTMLElement
    const bgGray = () => {
        ele.classList.add("bgGray")
    }
    const removeGray = () => {
        ele.classList.remove("bgGray")
    }

    const turnBlack = () => {
        ele.classList.add("bgblack")
    }
    const removeBlack = () => {

        ele.classList.remove("bgblack")
    }



    return (
        <>
            <div className={`container ${Props.isEven}`}>
            {/* <div className={`container ${Props.isEven}`} onMouseEnter={Props.isEven ? turnBlack : bgGray} onMouseLeave={Props.isEven ? removeBlack : removeGray}> */}
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