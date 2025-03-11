import Intro from "@/components/intro";
import Posts from "@/components/posts";
import ProjectsPreview from "@/components/ProjectsPreview";
import AboutMePage from "./about-me/page";

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-100px)] py-24">
      <div className="container mx-auto max-w-3xl px-4 mt-16">
        <Intro />
        <Posts />
        <AboutMePage />
        <ProjectsPreview />
      </div>
    </section>
  );
}
