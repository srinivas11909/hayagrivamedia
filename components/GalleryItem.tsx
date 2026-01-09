import Image from "next/image"

export default function GalleryItem({ item, onClick }: any) {
    console.log(item)
    return (
        <div
            onClick={onClick}
            className="mb-4 cursor-pointer group overflow-hidden rounded-lg"
        >
            <Image
                src={item.image}
                alt={item.caption || item.category}
                width={400}
                height={600}
                placeholder="blur"
                blurDataURL="/blur.png"
                className="w-full h-auto group-hover:scale-105 transition"
            />

            {item.caption && (
                <p className="mt-2 text-sm text-muted-foreground">
                    {item.caption}
                </p>
            )}
        </div>
    )
}
