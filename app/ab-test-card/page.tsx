"use client"
import React, { useEffect, useState } from 'react'
import CardA from "../components/CardA"
import CardB from "../components/CardB"
import Cookies from 'js-cookie';
import Statsig from 'statsig-js';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Page = () => {

    const [version, setVersion] = useState<string>();

    const render = () => {
        let showLargerText = Statsig.checkGate("show_larger_text")
        if (showLargerText) {
            let container = document.getElementsByClassName("container")
            let ele = container[0] as HTMLElement
            ele.style.color = "blue"
            ele.style.fontSize = "20px"
            ele.style.boxShadow = "10px 10px 5px gray"
        }

    }

    useEffect(() => {
        let visitorId = Cookies.get('visitorId');

        Statsig.initialize("client-gPRbvx5iGH9S0EpIWiImP9ftAgFbO4b0zDRwEsRbCvh", { userID: "prP0oFjXWhdR96l1dev9z" }).then(() => {
            setTimeout(() => {
                render()
            }, 1000);
        })
        const title = document.getElementsByTagName("title")
        let ele = title[0] as HTMLElement
        ele.innerText = "AB Testing Card using Statsig"


        if (!visitorId) {
            visitorId = Math.floor(Math.random() * 100000).toString();
            Cookies.set('visitorId', visitorId, { path: '/' });
        }

        const isEvenVisitor = parseInt(visitorId, 10) % 2 === 0;
        setVersion((isEvenVisitor ? 'version1' : 'version2'));
    }, []);

    return (
        <>
            <Header />
            {
                version === "version1" ? (<CardA isEven={true} rFunc={render} />) : (<CardB isEven={false} w={300} />)
            }
            <Footer />
        </>
    )
}

export default Page