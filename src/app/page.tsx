import Image from "next/image";
import { Home } from "@/home";
import type { Metadata } from "next";
import News from "@/newsApiTesting/news";

export const metadata: Metadata = {
  title: "News Portal",
  description: "Developed by Rhutik Chaudhari",
  keywords:['fast','secured','best','motivated']
};
export default function Homie() {
  return <Home/>
}
