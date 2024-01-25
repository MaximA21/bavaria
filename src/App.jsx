import './App.css'
import {Spotlight} from "./components/Spotlight.jsx";
import {ShimmerHeadline} from "./components/ShimmerHeadline.jsx";
import {Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Link} from "@nextui-org/react";
import {SocialsIcon} from "./components/SocialsIcon.jsx";

function App() {
    return (
        <>
            <header className="pb-32 pt-2 flex gap-5 items-center justify-center">
<a href={"https://www.linkedin.com/in/maxim-akishin-78a7a0259"} target={"_blank"} rel={"noreferrer"}>
                <Button className={"bg-main"}
                        endContent={<SocialsIcon icon={"linkedin"} />}>
                    LinkedIn
                </Button>
</a>
                <a href={"https://github.com/MaximA21"} target="_blank" rel="noreferrer">
                <Button className={"bg-main"} endContent={<SocialsIcon icon={"github"}/>}>
                    GitHub
                </Button>
                </a>
            </header>


            <main className={"p-9"}>


                <div className="between-lines_wrapper__QeHD9 between-lines_wrapper-gradient__abLQd">
                        Maxim Akishin
                </div>
                <div className={"hero__lines"}>
                    <div className={"hero__wlines"}>
                        <div className={"hero__hline"} style={{gridArea: "h-line-1", opacity: "0.75"}}/>
                        <div className={"hero__hline"} style={{gridArea: "h-line-2", opacity: "1"}}/>
                        <div className={"hero__hline"} style={{gridArea: "h-line-3", opacity: "1"}}/>
                        <div className={"hero__hline"} style={{gridArea: "h-line-4", opacity: "1"}}/>
                        <div className={"hero__hline"} style={{gridArea: "h-line-5", opacity: "1"}}/>
                        <div className={"hero__hline"} style={{gridArea: "h-line-6", opacity: "1"}}/>
                        <div className={"hero__hline"} style={{gridArea: "h-line-7", opacity: "1"}}/>
                        <div className={"hero__hline"} style={{gridArea: "h-line-8", opacity: "1"}}/>
                    </div>
                    <div className="hero__vlines">
                        <div className={"hero__vline"} style={{gridArea: "v-line-1", opacity: "1"}}/>
                        <div className={"hero__vline"} style={{gridArea: "v-line-2", opacity: "0.6"}}/>
                        <div className={"hero__vline"} style={{gridArea: "v-line-3", opacity: "0.6"}}/>
                        <div className={"hero__vline"} style={{gridArea: "v-line-4", opacity: "1"}}/>


                    </div>
                </div>


                <div className="dots-1 dots"></div>
                <div className="dots-2 dots"></div>
                <div className="dots-3 dots"></div>
                <div>
                    <ShimmerHeadline>Servus</ShimmerHeadline>


                </div>
                <h1>I am Maxim,<br/> a computer science student at the LMU<br/>and a passionate developer.</h1>

                <div className={"hero__spotlights"}>
                    < Spotlight
                        rotate={"20deg"}
                        scale={"1"}
                        duration={"5s"}/>
                    < Spotlight
                        rotate={"0deg"}
                        scale={"1.02"}
                        duration={"8s"}/>

                    < Spotlight
                        rotate={"-20deg"}
                        scale={"1"}
                        duration={"4s"}/>
                </div>
            </main>
            <section className={"pb-32"} style={{display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center"}}>
                <Card className="py-4  dark">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="/assets/images/bavarianBrezel.png"
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">MunichStore</p>
                            <a href={"https://themunichstore.vercel.app"}
                               className="text-small text-default-500 underline">themunichstore.vercel.app</a>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="overflow-visible py-2 ">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl m-auto"
                            src="/assets/images/bavarianBrezel.png"
                            removeWrapper={true} width={170}
                        />
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://github.com/MaximA21/themunichstore"
                        >
                            Visit source code on GitHub.
                        </Link>
                    </CardFooter>
                </Card>


                <Card className="py-4  dark">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="/assets/images/vanilla.png"
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">VanillaBlog</p>
                            <a href={"https://blogvanilla.vercel.app"}
                               className="text-small text-default-500 underline ">blogvanilla.vercel.app</a>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="overflow-visible py-2 ">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl m-auto"
                            src="/assets/images/previewVanilla.png"
                            removeWrapper={true} width={170}
                        />
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://github.com/MaximA21/blogvanilla"
                        >
                            Visit source code on GitHub.
                        </Link>
                    </CardFooter>
                </Card>


                <Card className="py-4  dark">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="/assets/images/fd.png"
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">FutureDrive<br/> Technologies</p>

                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="overflow-visible py-2 ">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl m-auto"
                            src="/assets/images/previewFd.png"
                            removeWrapper={true} width={170}
                        />
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://www.iabg.de/sichere-mobilitaet-der-zukunft/sicheres-autonomes-fahren/testfeld-fuer-autonomes-fahren"
                        >
                            Read more about the project.
                        </Link>
                    </CardFooter>
                </Card>
                <Card className="py-4  dark">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="/assets/images/Eyes-Emoji.png"
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">More coming soon...</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="overflow-visible py-2 ">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl m-auto"
                            src="/assets/images/Hourglass-Emoji.png"
                            removeWrapper={true} width={130}
                        />
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://tagesschau.de"
                        >
                            Read the news in the meantime.
                        </Link>
                    </CardFooter>
                </Card>

            </section>


        </>
    )
}

export default App
