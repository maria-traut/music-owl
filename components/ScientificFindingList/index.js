import ScientificFindingCard from "../ScientificFindingCard";

export default function ScientificFindingList({ findings }) {
  console.log("findings", findings);
  return (
    <ul>
      {findings.map((finding) => (
        <ScientificFindingCard key={finding._id}>
          {finding.title}
        </ScientificFindingCard>
      ))}
    </ul>
  );
}
