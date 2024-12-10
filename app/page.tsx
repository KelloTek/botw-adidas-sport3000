import HomeDiscoverSportsComponent from './components/HomeDiscoverSportsComponent'
export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-[1000px] bg-fond bg-cover bg-bottom">
        <div className="h-fit bg-neutral-300/75 py-5 px-10 rounded-3xl">
            <h1 className="text-center text-white border-2 border-solid border-b-white border-t-transparent border-x-transparent mb-10">
              Find your <b className="text-yellow">NEXT</b> goal</h1>
              <div className="flex items-center h-[400px] overflow-hidden rounded-3xl mb-10">
                <video autoPlay loop src="videos/adidas.mp4" className="w-full h-[500px] bg-black scale-150"/></div>
              <div className="flex flex-row">
                <p className="pl-16 text-xl mr-52 ">Envie de découvrir un nouveau sport adapté a tes habitudes ? <br/> Découvre notre quiz personnalisé et rapide !</p>
                <div className="flex flex-row bg-yellow py-5 px-16 rounded-xl">
                  <a href="/" className="text-3xl">Go quiz</a>
                  <p className="text-3xl">&#10140;</p>
                </div>
              </div>
          </div>
      </div>
      
      <HomeDiscoverSportsComponent/>
    </>
  );
}
