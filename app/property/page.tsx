import { Metadata } from "next";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { AlbumArtwork } from "@/components/album-artwork";
import { Sidebar } from "@/components/sidebar";
import { listenNowAlbums, madeForYouAlbums } from "@/data/albums";
import { playlists } from "@/data/playlists";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Property Listings",
  description:
    "Showcasing properties available for sale and rent with a horizontal scroll layout.",
};

export default function Property() {
  return (
    <div className="block">
  <div className="border-t">
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-violet-600 to-slate-400 p-6 sm:p-8 lg:p-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
          Discover Your Dream Property
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white text-center mt-4">
          Browse through our listings of premium properties for sale and rent.
        </p>
      </div>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 py-6 px-4 sm:px-6 lg:px-8">
        {/* Sidebar */}
        <Sidebar
          playlists={playlists}
          className="hidden lg:block lg:col-span-1 p-4 rounded-lg"
        />

        {/* Main content area */}
        <div className="col-span-1 lg:col-span-4 p-4 sm:p-6 lg:p-6 rounded-lg">
          <Tabs defaultValue="properties" className="space-y-6">
            {/* Tabs and Category Selector */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <TabsList className="flex">
                <TabsTrigger value="properties" className="text-base sm:text-lg font-semibold">
                  Featured Properties
                </TabsTrigger>
                <TabsTrigger value="categories" className="text-base sm:text-lg font-semibold">
                  Property Categories
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Featured Properties Section */}
            <TabsContent value="properties">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                Hand-Picked Properties
              </h2>
              <p className=" mb-4 text-sm sm:text-base">
                A curated selection of our best properties for sale and rent.
              </p>
              <Separator className="mb-6" />

              {/* Grid for Featured Properties */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {listenNowAlbums.map((album) => (
                  <AlbumArtwork
                    key={album.name}
                    album={album}
                    className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    aspectRatio="portrait"
                    width={250}
                    height={350}
                  />
                ))}
              </div>
            </TabsContent>

            {/* Property Categories Section */}
            <TabsContent value="categories">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold ">
                Property Categories
              </h2>
              <p className=" mb-4 text-sm sm:text-base">
                Browse through various property categories for sale and rent.
              </p>
              <Separator className="mb-6" />

              {/* Horizontal Scroll for Categories */}
              <div className="relative">
                <ScrollArea>
                  <div className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-6">
                    {madeForYouAlbums.map((album) => (
                      <div
                        key={album.id}
                        className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] flex-shrink-0 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 transform hover:scale-105"
                      >
                        <Image
                        loading="lazy"
                        height={100}
                        width={100}
                          src={album.image}
                          alt={album.name}
                          className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="mt-3 text-center  font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
                          {album.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
