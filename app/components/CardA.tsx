'use client';
import React, { useCallback, useEffect, useState } from 'react'

import Card from "./Card"
import { createClient } from "contentful"

interface HtmlContent {
    items?: MainContent[]
}

interface MainContent {
    fields?: ContentData
}

interface ContentData {
    heading?: string,
    description?: Desc,
    image?: Img
}

interface Desc {
    content?: ContentForDesc[]
}

interface ContentForDesc {
    content?: ContentForDesc2[]
}

interface ContentForDesc2 {
    value?: string
}

interface Img {
    fields?: ImageFields
}

interface ImageFields {
    file?: ImageFile
}

interface ImageFile {
    url?: string
}


const CardA = (Props: any) => {

    const [HtmlData, setHtmlData] = useState<HtmlContent>()

    const client = createClient({
        space: "kp0x19lqk3lm",
        accessToken: "4ZJWSRN5SbOdXvqh3efQAqWyVzpKFmCoWVA3hQlMit0"
    })

    const fetchData = useCallback(async (): Promise<HtmlContent> => {
        const dataEntry = await client.getEntries({ content_type: 'card' });
        return dataEntry;
    }, [client]);

    useEffect(() => {
        fetchData().then((res) => {
            setHtmlData(res);
        })
    }, []);

    return (
        <>
            {
                HtmlData && (
                    HtmlData.items && (
                        <>
                            
                            <div className='card'>
                                <Card Title={HtmlData.items[1]?.fields?.heading} Desc={HtmlData.items[1]?.fields?.description} isEven={Props.isEven} Img={"https:" + (HtmlData.items[1].fields?.image?.fields?.file?.url)?.toString()} />

                            </div>
                        </>
                    )
                )
            }
        </>
    )
}

export default CardA