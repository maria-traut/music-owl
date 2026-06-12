import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import PersonDetail from "@/components/PersonDetail";
import { StyledMain } from "@/components/Global/Global.styles";

export default function Person() {
  const router = useRouter();
  const { id } = router.query;

  const { data: person, isLoading, error } = useSWR(`/api/people/${id}`);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>An error occurred.</p>;
  if (!person) return <p>People could not be loaded.</p>;

  return (
    <StyledMain>
      <Link href="/people">&#8592; Back to List</Link>
      <PersonDetail person={person} />
    </StyledMain>
  );
}
