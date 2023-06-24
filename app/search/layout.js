import Header from "./Header.jsx";

export default function SeachLayout({ children }) {
  return (
    <>
      <Header />
      <main className="relative top-[7.5rem] pt-4 container mx-auto">
        {children}
      </main>
    </>
  );
}
