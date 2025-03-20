import logo from "@/public/logo.svg";
import resumePreview from "@/public/cv.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowBigRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 px-5 py-12 text-center text-gray-900 md:flex-row md:text-start lg:gap-12 dark:bg-background">
      <div className="max-w-prose space-y-3">
        <Image
          src={logo}
          alt="Logo"
          width={150}
          height={150}
          className="mx-auto md:ms-0"
        />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-accent-foreground">
          Create the{" "}
          <span className="inline-block bg-gradient-to-r from-fuchsia-600 to-fuchsia-400 bg-clip-text text-transparent">
            Perfect Resume
          </span>{" "}
          in Minutes
        </h1>
        <p className="text-lg text-accent-foreground">
          Our <span className="font-bold">AI resume builder</span> helps you
          design a professional resume, even if you&apos;re not very smart.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-purple-600 hover:bg-purple-700  text-white"
        >
          <span>
            {" "}
            <Link href="/resumes">Get started</Link>
            <ArrowBigRight />
          </span>
        </Button>
      </div>
      <div>
        <Image
          src={resumePreview}
          alt="Resume preview"
          width={600}
          className="shadow-md lg:rotate-[1.5deg]"
        />
      </div>
    </main>
  );
}
