import React, { useEffect } from 'react'
import Image from 'next/image'

const Card = (Props: any) => {
    
    useEffect(()=> {
        const container = document?.getElementsByClassName("container")
        console.log("container ",container)
        let ele = container[0] as HTMLElement
        console.log("ele ", ele)
            const bgGray = () => { 
            ele?.classList.add("bgGray")
        }
        const removeGray = () => {
            ele?.classList.remove("bgGray")
        }
    
        const turnBlack = () => {
            ele?.classList.add("bgblack")
        }
        const removeBlack = () => {
            ele?.classList.remove("bgblack")
        }

        if (Props.isEven) {
            ele.addEventListener('mouseenter', turnBlack);
            ele.addEventListener('mouseleave', removeBlack);
        } else {
            ele.addEventListener('mouseenter', bgGray);
            ele.addEventListener('mouseleave', removeGray);
        }
    },[])

   

    return (
        <>
            <div className="container">
            {/* <div className={`container `} onMouseEnter={Props.isEven ? turnBlack : bgGray} onMouseLeave={Props.isEven ? removeBlack : removeGray}> */}
                <div className='CardTitle'>
                    <h2><b> {Props.Title}</b></h2>
                </div>
                <div className='CardImg'>
                    <Image priority src={Props.Img} width={Props.isEven ? 200 : 270} height={150} alt="Peacock Image"/>
                </div>
                <div className='CardDesc'>
                    <p>{Props.Desc}</p>
                </div>
            </div>
        </>
    )
}

export default Card