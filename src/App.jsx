import './App.css'
import {Spotlight} from "./components/Spotlight.jsx";
import {ShimmerHeadline} from "./components/ShimmerHeadline.jsx";
import {Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Link} from "@nextui-org/react";
import {GitHubIcon} from "./components/GitHubIcon.jsx";

function App() {
    return (
        <>
            <header className="pb-32 pt-2 flex gap-5 items-center justify-center">
                <Button color="success"
                        endContent={<img src={"/assets/images/bavarianBrezel.png"} className={"w-0.5 h-0.5"}/>}>
                    Take a photo
                </Button>
                <Button color="success" endContent={<GitHubIcon/>}>
                    Take a photo
                </Button>
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
                <h1 style={{color: "white"}}>I am Maxim. A Computer Science Studetn at LMu</h1>

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
            <section style={{display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center"}}>
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
                            <a href={"https://google.com"}
                               className="text-small text-default-500 underline">nextui.org</a>
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
                            href="https://github.com/nextui-org/nextui"
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
                            src="/assets/images/fd.png"
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">FutureDrive Technologies</p>
                            <p className="text-small text-default-500">nextui.org</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="overflow-visible py-2 ">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl m-auto"
                            src="/assets/images/bavarianHat.png"
                            removeWrapper={true} width={170}
                        />
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://github.com/nextui-org/nextui"
                        >
                            Visit source code on GitHub.
                        </Link>
                    </CardFooter>
                </Card>

            </section>


        </>
    )
}

export default App
