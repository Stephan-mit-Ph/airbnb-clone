import { ResultsList } from "./ResultsList";

export default async function Page() {
  const res = await fetch(
    "https://airbnb-clone-virid-iota.vercel.app/api/search"
  );
  const data = await res.json();

  return (
    <>
      <ResultsList data={data} />
    </>
  );
}
