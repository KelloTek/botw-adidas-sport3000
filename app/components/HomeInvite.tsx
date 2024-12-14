import Link from "next/link";

export default function HomeInvite() {
  return (
    <section>
      <div className="flex justify-center items-center h-[1000px] bg-fond bg-cover bg-bottom">
        <div className="h-fit bg-neutral-300/75 py-5 px-10 rounded-3xl">
          <video autoPlay loop src="videos/video1.mp4" className="w-full h-fit bg-neutral-300 scale-150 -z-10">
          <div className="z-0">
            <h1 className="text-center text-white border-2 border-solid border-b-white border-t-transparent border-x-transparent mb-10">
                Find your <b className="text-yellow">NEXT</b> goal
              </h1>
              <div className="flex items-center h-[400px] overflow-hidden rounded-3xl mb-10">
              </div>
              <div className="flex flex-row">
                <p className="pl-16 text-xl mr-52 ">
                  Envie de découvrir un nouveau sport adapté a tes habitudes ?{" "}
                  <br /> Découvre notre quiz personnalisé et rapide !
                </p>
                <div className="flex flex-row bg-yellow py-5 px-16 rounded-xl">
                  <Link href="/" className="text-3xl">
                    Go quiz
                  </Link>
                  <p className="text-3xl">&#10140;</p>
                </div>
              </div>
          </div>
          </video>
        </div>
      </div>
    </section>
  );
}
