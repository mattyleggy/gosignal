import HomeHeader from "./_components/home-header";
import BackgroundGradient from "@/components/header/background-gradient";
import KeyFeatures from "./_components/key-features";
import Reasons from "./_components/reasons";

export default function Home() {
    return (
        <>
            <BackgroundGradient />
            <HomeHeader />
            <KeyFeatures />
            <Reasons />
        </>
    );
}
