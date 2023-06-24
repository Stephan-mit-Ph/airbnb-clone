import { ResultsList } from "./results/ResultsList";

export default async function Search() {
  const res = await fetch("http://localhost:3000/api/search");
  const data = await res.json();

  return (
    <>
      <ResultsList data={data} />
    </>
  );
}
