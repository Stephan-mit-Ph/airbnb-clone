import { ResultsList } from "./results/ResultsList";

import Link from "next/link";

export default async function Search() {
  const res = await fetch(
    "https://airbnb-clone-virid-iota.vercel.app/api/search"
  );
  const data = await res.json();

  return (
    <>
      <div className="flex items-center justify-center w-screen bg-cover bg-center h-48 bg-[url('/images/booking-website-hero.png')]">
        <Link
          href="/search/results"
          className="rounded-full text-white bg-[#673979] px-4 py-2 hover:bg-[#7B3C7D]"
        >
          Browse Stays
        </Link>
      </div>
      <ResultsList data={data} />
    </>
  );
}
