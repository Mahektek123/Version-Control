"use client"
import React, { useEffect, useState } from 'react'
import Version1 from "../Version1/page"
import Version2 from "../Version2/page"
import Cookies from 'js-cookie';
import Statsig from 'statsig-js';
import jq from 'jquery';

const Page = () => {

    const [version, setVersion] = useState<string>();

    const render = () => {
        let showLargerText = Statsig.checkGate("show_larger_text")
        if(showLargerText){
            jq(".container").css({fontSize: "20px", color: "blue", boxShadow: "10px 10px 5px gray"})
            // jq("html").css({backgroundColor: "black"})
        }
    }

    
    useEffect(() => {
        let visitorId = Cookies.get('visitorId');
        
        // window.onload = () => {
            Statsig.initialize("client-gPRbvx5iGH9S0EpIWiImP9ftAgFbO4b0zDRwEsRbCvh",{userID: "prP0oFjXWhdR96l1dev9z"}).then(() => {
                render()
            })
        // }
        
        jq("title").text("AB Testing Card using Statsig")

        if (!visitorId) {
            visitorId = Math.floor(Math.random() * 100000).toString();
            Cookies.set('visitorId', visitorId, { path: '/' });
        }

        const isEvenVisitor = parseInt(visitorId, 10) % 2 === 0;
        setVersion((isEvenVisitor ? 'version1' : 'version2'));
    }, []);

    if (version === "version1") {
        return (
            <>
                <Version1 isEven={true}/>
            </>
        )
    } else {
        return (
            <>
                <Version2 isEven={false} w={300}/>
            </>
        )

    }
}

export default Page