import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(response.json());

export default function ScientificFindingCard() {
  const { data: findings } = useSWR("/api/ScientificFinding", fetcher);

  const { title, category, finding, authors, year, source, publisher, tags } =
    findings;
  return (
    <li>
      <p>{category}</p>
      <h2>{title}</h2>
      <article>{finding}</article>
      {authors.map((author) => (
        <p key={author}>{author}</p>
      ))}
      <p>{year}</p>
      <p>{source}</p>
      <p>{publisher}</p>
      {tags.map((tag) => (
        <p key={tag}>{tag}</p>
      ))}
    </li>
  );
}
