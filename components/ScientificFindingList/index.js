export default function ScientificFindingList() {
  return (
    <ul>
      {findings.map((finding) => (
        <li key={finding._id}>{finding.title}</li>
      ))}
    </ul>
  );
}
