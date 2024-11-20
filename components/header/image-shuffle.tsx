import Image from "next/image";

export default function ImageShuffle() {
    const imageStyles = "rounded-lg absolute";
    return (
        <div className="relative w-[540px] h-[470px]">
            <Image src="/images/website-01.png" alt="Hero Image" width={250} height={250} className={`${imageStyles} top-0 left-[15%]`} />
            <Image src="/images/website-02.png" alt="Hero Image" width={250} height={250} className={`${imageStyles} top-[35%] left-[50%]`} />
            <Image src="/images/website-03.png" alt="Hero Image" width={250} height={250} className={`${imageStyles} bottom-0 left-0`} />
        </div>
    );
}
