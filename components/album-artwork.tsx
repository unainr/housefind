import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  ContextMenu,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

import { Album } from "@/data/albums"
import Link from "next/link"

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

export function AlbumArtwork({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
    <ContextMenu>
      <ContextMenuTrigger>
        {/* Card Container with hover effects */}
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Link wrapping the image */}
         
            {/* Image with fixed aspect ratio and object-cover for consistent sizing */}
            <Image
              src={album.image}
              alt={album.name}
              width={width}
              height={height}
              className={cn(
                "object-cover w-full h-64 transition-transform duration-300 hover:scale-105", 
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
         
          {/* Optional Overlay on hover */}
          <Link href={`/property/${album.id}`}>
          <div className="absolute inset-0 bg-gradient-to-t from
          -black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <h3 className="text-white text-lg font-semibold">{album.name}</h3>
          </div>
          </Link>
        </div>
      </ContextMenuTrigger>
    </ContextMenu>
  
    {/* Album Info Section */}
    <div className=" p-2 text-sm">
      <p className="text-xs text-gray-500  ">{album.bio}</p>
    </div>
  </div>
  
  )
}