import Link from "next/link";

export default function HomeInvite() {
  return (
    <section className="h-screen">
      <div className="bg-gradient-to-b from-gray to-black h-full w-full">
        <div className="h-full w-full p-[5%] flex flex-col justify-center items-center">
          <div className="relative rounded-xl h-full w-fit">
            <video
              autoPlay
              loop
              src="videos/video1.mp4"
              className="w-full h-full rounded-xl"
            />

            <div className="absolute top-2/3 left-5 transform -translate-y-1/2 w-[35%] p-5 rounded-lg bg-white/75">
              Envie de tester un nouveau sport avec tes amis ? Retrouve les
              sports et les endroits pour pratiquer une nouvelle activité avec
              tes amis.
            </div>

            <div className="absolute bottom-28 left-5 w-[35%] p-5  rounded-2xl bg-yellow text-white text-center">
              <Link href="/invite">INVITE YOUR FRIENDS</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
