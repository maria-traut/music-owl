import ScientificFindingList from "@/components/ScientificFindingList";
import Link from "next/link";

export default function Science() {
  return (
    <>
      <Link href="/">&#8592; Back to Homepage</Link>
      <br />
      <ScientificFindingList />
    </>
  );
}
