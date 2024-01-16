import {Component} from "react";
import {Link} from "react-router-dom";

interface OnHoverImageParams {
    text: any;
}


export class Home extends Component {
    state = {
        text: "Lucidi-fi is a mental health platform designed to provide a supportive space for individuals " +
            "seeking emotional support and professional guidance. The site offers a range of services to promote " +
            "mental well-being:",
    };

    onHoverImage = ({text}: OnHoverImageParams) => {
        switch (text) {
            case "Call Professionals":
                text = "We allows you to connect with licensed mental health professionals easily. Users can seek" +
                    " professional guidance, share their thoughts and feelings confidentially, and receive expert support to" +
                    " enhance their mental well-being. This feature aims to provide a direct and accessible avenue for " +
                    "individuals to engage with qualified professionals for personalized assistance and advice.";
                break;
            case "Share your story":
                text = "We extend a warm invitation to you, encouraging the sharing of your heartfelt stories in the " +
                    "comforting embrace of anonymity. Within our community, you are not alone; we are here to witness " +
                    "and support you. This sacred space is crafted for you to express the unique melody of your thoughts " +
                    "and emotions, finding solace in the understanding and encouragement of those who walk a similar path. " +
                    "More than a feature, this is a compassionate sanctuary where your vulnerability transforms into strength, " +
                    "and shared stories weave a tapestry of healing. Together, we create a symphony of understanding " +
                    "and compassion, uniting our hearts in the shared journey toward well-being.";
                break;
            case "Lend an ear":
                text = "We welcome you to be an empathetic listener within our community, where you have the opportunity" +
                    " to engage with the poignant narratives of others, all while embracing the cloak of anonymity. Here, " +
                    "you are not just a user; you are a compassionate presence, offering support through the simple yet" +
                    " profound act of listening. This isn't merely a feature—it's a shared commitment to create a haven " +
                    "where individuals can vulnerably open up, finding solace and strength in the understanding and " +
                    "encouragement bestowed upon them by fellow community members. Your role goes beyond the digital " +
                    "realm; it is a vital part of the collective heartbeat that pulses with empathy, making Lucidi-fi a" +
                    " sanctuary where shared experiences become the threads that bind us together in a tapestry of " +
                    "support and compassion.";
                break;
            case "Hear me out":
                text = "Join us in creating a compassionate circle within Lucidi-fi, where you have the power to lend a " +
                    "caring ear to the narratives of others, all while preserving the sanctuary of anonymity. As part " +
                    "of our community, your role is not just to use a feature but to become a supportive presence, " +
                    "extending comfort by attentively listening to the stories shared. This isn't merely a " +
                    "functionality; it's a shared commitment to cultivating a secure haven. Here, individuals" +
                    " can freely express their experiences, finding reassurance and solidarity through the empathetic" +
                    " connections forged within our community. Your engagement transcends the digital interface; " +
                    "it is a pivotal contribution to the collective spirit that resonates with empathy, making Lucidi-fi " +
                    "a refuge where shared stories knit us together in a tapestry of mutual support and understanding..";
                break;

            default:
                text = "Step into Lucidi-fi, not just a mental health platform but a nurturing haven " +
                    "crafted to envelop individuals in their journey toward emotional well-being." +
                    " Here, we understand the delicate nature of seeking support, and that's why we " +
                    "offer a spectrum of services aimed at fostering mental well-being. It's more" +
                    "than just a site; it's a sanctuary where individuals can find solace, receive" +
                    " compassionate support, and access professional guidance in their pursuit of" +
                    " a healthier and more balanced life. Lucidi-fi is your ally on this path, " +
                    "offering a supportive space where understanding and empowerment converge to " +
                    "create a tapestry of mental well-being.";
        }


        this.setState({text});
    };

    render() {
        return (
            <div className="justify-center">
                <div className="bg-blue-700 w-screen max-h-fit flex flex-col rounded-b-3xl">
                    <h1 className="justify-center text-center text-amber-50 font-bold text-2xl mt-10">
                        Where Expertise Meets Privacy, Your Answers in Confidence.
                    </h1>

                    <div className="flex flex-row gap-x-6 justify-center mt-10 ">
                        <div
                            className="justify-center w-52 h-72 bg-amber-50 rounded-2xl hover:border-4 hover:border-amber-500"
                            onMouseOver={() => this.onHoverImage({text: "Call Professionals"})}
                            onMouseOut={() => this.onHoverImage({text: ""})}
                        >
                            <img className="rounded-2xl" src="/assets/images/mainContent/contact%20prof%20(2).jpg" alt=""/>
                            <h1 className="ml-2 mt-2">Call Professionals</h1>
                        </div>

                        <div
                            className="justify-center w-52 h-72 bg-amber-50 rounded-2xl hover:border-4 hover:border-amber-500"
                            onMouseOver={() => this.onHoverImage({text: "Share your story"})}
                            onMouseOut={() => this.onHoverImage({text: ""})}

                        >
                            <img className="rounded-2xl" src="/assets/images/mainContent/share%20ur%20story.jpg" alt=""/>
                            <h1 className="ml-2 mt-2">Share your story</h1>
                        </div>

                        <div
                            className="justify-center w-52 h-72 bg-amber-50 rounded-2xl hover:border-4 hover:border-amber-500"
                            onMouseOver={() => this.onHoverImage({text: "Lend an ear"})}
                            onMouseOut={() => this.onHoverImage({text: ""})}

                        >
                            <img className="rounded-2xl" src="/assets/images/mainContent/lend%20an%20ear.jpg" alt=""/>
                            <h1 className="ml-2 mt-2">Lend an ear</h1>
                        </div>

                        <div
                            className="justify-center w-52 h-72 bg-amber-50 rounded-2xl hover:border-4 hover:border-amber-500"
                            onMouseOver={() => this.onHoverImage({text: "Hear me out"})}
                            onMouseOut={() => this.onHoverImage({text: ""})}

                        >
                            <img className="rounded-2xl" src="/assets/images/mainContent/Here%20me%20out.jpg" alt=""/>
                            <h1 className="ml-2 mt-2">Hear me out</h1>
                        </div>

                    </div>

                    <div className="justify-center text-left mt-10 mx-10 h-60 ">
                        <h1 className="text-amber-50 ease-in-out duration-300"
                        >{this.state.text}</h1>
                    </div>
                </div>

            </div>
        );
    }
}