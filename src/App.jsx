import './App.css'
import {Spotlight} from "./components/Spotlight.jsx";
import {ShimmerHeadline} from "./components/ShimmerHeadline.jsx";
import {Card, CardBody, CardFooter, CardHeader, Divider, Image, Link} from "@nextui-org/react";

function App() {
    return (
        <>
            <header style={{color: "white", background: "white"}}>
                github
            </header>


            <main className={"div"}>
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
            <section style={{display: "flex", gap: "16px", flexWrap: "wrap", justifyContent:"center"}}>
                <Card className="py-4  dark">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">MunichStore</p>
                            <p className="text-small text-default-500">nextui.org</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="overflow-visible py-2 ">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl m-auto"
                            src="images/Screenshot_2024-01-24_at_03.51.50-removebg-preview.png"
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
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">VanillaBlog</p>
                            <a href={"https://google.com"} className="text-small text-default-500 underline ">nextui.org</a>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="overflow-visible py-2 ">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl m-auto"
                            src="../images/Screenshot_2024-01-24_at_03.51.50-removebg-preview.png"
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
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
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
                            src="./images/Screenshot_2024-01-24_at_03.51.50-removebg-preview.png"
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
