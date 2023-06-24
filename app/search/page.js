import { ResultsList } from "./results/ResultsList";

export default async function Search() {
  const res = await fetch("/api/search");
  const data = await res.json();

  return (
    <>
      <ResultsList data={data} />
    </>
  );
}
