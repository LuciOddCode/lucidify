import {Component} from "react";

export class About extends Component {
    render() {
        return (
            <div className="flex flex-row justify-center mt-10">
                <div className="w-1/3 bg-blue-300 h-fit ">
                    <img src="/assets/images/about/about.jpg" alt="About Image"/>
                </div>
                <div className="justify-center text-left w-2/3 mx-8 h-fit">
                    <p className=" ">
                        <h1 className="text-blue-900 font-bold text-2xl">Welcome to the heart of Lucidi-fi, </h1>
                        where I, Luci, am the sole creator and architect of this
                        platform. As a student at the Institute of Software Engineering, my passion for coding and
                        perpetual curiosity led me to embark on this journey of creating something meaningful.
                        <br/>
                        <br/>

                        Beyond the lines of code, I identify myself as a good listener and a trustworthy secret keeper.
                        Those around me have often sought solace in sharing their problems, and my instinct to help has
                        always guided me. Though I may not bear the title of a professional, I've crafted this space
                        where my knack for listening meets the expertise of mental health professionals.
                        <br/>
                        <br/>

                        The genesis of Lucidi-fi emerged from the simple belief that everyone deserves a
                        platform to share their burdens and receive both understanding and professional help.
                        Through late nights of coding and endless dedication, I've brought this idea to life, hoping it
                        resonates with you.
                        <br/>
                        <br/>

                        Here, in the warm embrace of Lucidi-fi, you can rest assured that the information you share is
                        held in the utmost confidence. Thank you for gracing my site with your presence.
                        I sincerely hope it becomes a place where shared stories weave a tapestry of support
                        and understanding.
                    </p>
                </div>
            </div>
        );
    }
}