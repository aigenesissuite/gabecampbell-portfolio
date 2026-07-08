import { StoriesPlayer, type Chapter } from "@/components/stories-player";

const chapters: Chapter[] = [
  {
    src: "/video/chapters/ch1.mp4",
    poster: "/video/chapters/ch1.jpg",
    title: "Meet the AI employee",
    duration: "1:57",
  },
  {
    src: "/video/chapters/ch2.mp4",
    poster: "/video/chapters/ch2.jpg",
    title: "aiOS — designed & coded solo",
    duration: "1:32",
  },
  {
    src: "/video/chapters/ch3.mp4",
    poster: "/video/chapters/ch3.jpg",
    title: "Onboarding as cinema",
    duration: "2:41",
  },
  {
    src: "/video/chapters/ch4.mp4",
    poster: "/video/chapters/ch4.jpg",
    title: "AI in your texts",
    duration: "1:32",
  },
];

export function Walkthrough({ caption }: { caption: string }) {
  return (
    <>
      <StoriesPlayer chapters={chapters} />
      <p className="video-caption">{caption}</p>
    </>
  );
}
