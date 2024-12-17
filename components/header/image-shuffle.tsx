import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Typography } from "../common/typography";

export default function ImageShuffle() {
    const imageStyles = "rounded-lg";
    const images = [
        { src: "/images/website-01.png", alt: "Hero Image" },
        { src: "/images/website-02.png", alt: "Hero Image" },
        { src: "/images/website-03.png", alt: "Hero Image" },
    ];

    return (
        <>
            {/* Desktop layout */}
            <div className="relative w-[540px] h-[470px] hidden md:block">
                <Image src="/images/website-01.png" alt="Hero Image" width={250} height={250} className={`${imageStyles} absolute top-0 left-[15%]`} />
                <Image src="/images/website-02.png" alt="Hero Image" width={250} height={250} className={`${imageStyles} absolute top-[35%] left-[50%]`} />
                <Image src="/images/website-03.png" alt="Hero Image" width={250} height={250} className={`${imageStyles} absolute bottom-0 left-0`} />
            </div>

            {/* Mobile carousel */}
            <div className="md:hidden w-full max-w-[300px] mx-auto">
                <Typography variant="h3" className="text-center mb-4">Previous Projects</Typography>
                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={300}
                                        height={300}
                                        className={imageStyles}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    );
}
