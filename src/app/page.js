import Blog from "@/components/Blogs/Blog";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2 className="text-3xl bg-purple-400">Next.js Blog Application</h2>
      <Blog />
    </>
  );
}
