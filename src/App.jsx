const Header = () => {
  return (
    <header className="flex item-center justify-center items-center py-3 bg-[#ffffff] rounded-b-[3rem] shadow-md shadow-mine-green fixed top-0 left-0 right-0 z-[99999]">
      <a href="https://kemenkopukm.go.id/" target="_blank" rel="noreferrer" className="flex items-center justify-center">
        <img src="/kemenkopukm.png" alt="logo" width={260} />
      </a>
    </header>
  );
};

const Title = () => {
  return (
    <div className="max-w-xl mt-24 relative z-[100]">
      <h1 className="text-4xl font-medium">Sistem Penomoran PPK</h1>
      <p className="mt-3 text-mine-font_paragraph font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, officiis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, amet?</p>
    </div>
  );
};

const Decoration = () => {
  return (
    <>
      <div className="absolute w-[15rem] h-[15rem]  border-[2rem] rounded-full bg-transparent border-mine-green -left-10 -bottom-20 z-10" />

      <div className="absolute w-[3rem] h-[15rem] bg-mine-yellow  right-10 -bottom-20 z-10 border border-mine-font_paragraph " />

      <div className="absolute w-[3rem] h-[10rem] bg-white  right-28 -bottom-20 z-10 border border-mine-font_paragraph " />

      <div className="absolute w-[3rem] h-[13rem] bg-mine-yellow  right-48 -bottom-20 z-10 border border-mine-font_paragraph " />

      <div className="absolute w-[5rem] h-[5rem] bg-mine-yellow rounded-full z-10 border-4 border-mine-font_paragraph left-10 top-11" />

      <div className="absolute w-[5rem] h-[5rem] bg-mine-yellow rounded-full z-10 border-4 border-mine-font_paragraph left-10 top-11" />

      <div className="absolute w-[3rem] h-[3rem] bg-mine-green rounded-full z-10 border-4 border-x-mine-blue right-10 top-24" />

      <div className="absolute w-[2rem] h-[2rem] bg-mine-semu_green rounded-full z-10 border-4 border-mine-yellow right-20 top-36" />

      <div className="absolute w-[1.7rem] h-[1.7rem] bg-white rounded-full z-10  right-10 top-40" />
    </>
  );
};

const CardSistem = () => {
  return (
    <div className="flex flex-col items-center md:flex-row  justify-center mt-16 gap-y-16 md:gap-x-10 md:gap-y-0 ">
      <a href="#" className="w-full md:w-1/3 border bg-mine-blue text-white rounded-xl duration-300 hover:shadow-lg hover:shadow-white group relative z-[100] hover:pb-14 pb-2">
        <div className="w-full bg-mine-green flex items-center justify-center p-10 rounded-b-[8rem] group-hover:-translate-y-10 duration-300 relative z-[100]">
          <span className="text-black w-40 h-40 rounded-full bg-mine-yellow flex items-center justify-center text-4xl border-4 border-mine-semu_green font-semibold group-hover:scale-110 duration-300">2023</span>
        </div>
        <h2 className="absolute text-3xl text-center bottom-5 right-0 left-0 z-10">Sistem Penomoran PPK 2023</h2>
      </a>

      <a href="#" className="w-full md:w-1/3 border  bg-gradient-to-br from-mine-blue to-mine-font_paragraph text-white rounded-xl duration-300 hover:shadow-lg hover:shadow-white group relative z-[100] hover:pb-14 pb-2">
        <div className="w-full bg-mine-green flex items-center justify-center p-10 rounded-b-[8rem] group-hover:-translate-y-10 duration-300 relative z-[100]">
          <span className="text-black w-40 h-40 rounded-full bg-mine-yellow flex items-center justify-center text-4xl border-4 border-mine-semu_green font-semibold group-hover:scale-110 duration-300">2024</span>
        </div>
        <h2 className="absolute text-3xl text-center bottom-5 right-0 left-0 z-10">Sistem Penomoran PPK 2024</h2>
      </a>
    </div>
  );
};

export default function App() {
  return (
    <main className="bg-mine-semu_green text-mine-blue">
      <Header />
      <div className="flex min-h-screen justify-center pt-10 w-full relative overflow-hidden z-[100]">
        <Decoration />
        <div className="container relative z-[100]">
          <Title />

          <CardSistem />
        </div>
      </div>
    </main>
  );
}
