import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import { Heart, MessageCircle, Bookmark, Send, MoreHorizontal } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI("AIzaSyACXuqPtmQvYJjDpx8eeohthOBff2CUfSA");
//
// const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-pro' });
//
// const imageResp = await fetch(
//     'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/2560px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg'
// )
//     .then((response) => response.arrayBuffer());
//
// const result = await model.generateContent([
//     {
//         inlineData: {
//             data: Buffer.from(imageResp).toString("base64"),
//             mimeType: "image/jpeg",
//         },
//     },
//     'write a small instagram caption for this image. make it under 50 words and make it sound genz. remove all formatting. give me only one',
// ]);
// console.log(result.response.text());
export default function InstagramPost() {
  const [link, setLink] = useState()
  return (
    <div className="flex justify-center w-full p-4">
      <Card className="max-w-md w-full overflow-hidden">
        <CardHeader className="flex flex-row items-center gap-3 p-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <div className="font-medium">username</div>
          <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
            <MoreHorizontal className="h-5 w-5" />
            <span className="sr-only">More options</span>
          </Button>
        </CardHeader>
            <Dialog>
              <DialogTrigger>Open</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Link to Image</DialogTitle>
                  <DialogDescription className="flex w-full max-w-sm items-center space-x-2">
                    {/* <p className="flex w-full max-w-sm items-center space-x-2"> */}
                      <Input type="email" placeholder="Link" value={link} onChange={e => setLink(e.target.value)} />
                      <Button type="submit" onClick={e => console.log(link)}>Use</Button>
                    {/* </p> */}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Post image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
              priority
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col p-0">
          <div className="flex items-center p-4">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Heart className="h-6 w-6" />
              <span className="sr-only">Like</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">Comment</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Send className="h-6 w-6" />
              <span className="sr-only">Share</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Bookmark className="h-6 w-6" />
              <span className="sr-only">Save</span>
            </Button>
          </div>
          <div className="px-4 pb-2">
            <p className="font-medium">1,234 likes</p>
          </div>
          <div className="px-4 pb-2">
            <p>
              <Link href="#" className="font-medium mr-1">
                <strong>username</strong>
              </Link>
              This is a caption for the Instagram post with a placeholder image.             
            </p>
          </div>
          <div className="px-4 py-3 border-t text-xs text-muted-foreground">2 HOURS AGO</div>
        </CardFooter>
      </Card>
    </div>
  )
}

