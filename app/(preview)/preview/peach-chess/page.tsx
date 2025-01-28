import Image from "next/image";
export default function Page() {
    return (
        <Image
            src="/images/preview/peach-chess.png"
            alt="Peach Chess"
            width={2560}
            height={1000}
            style={{ width: "100%", height: "auto" }}
        />
    );
}
