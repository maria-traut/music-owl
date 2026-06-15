import { useRouter } from "next/router";
import useSWR from "swr";
import PersonDetail from "@/components/PersonDetail";
import { StyledMain, StyledBackLink } from "@/components/Global/Global.styles";

export default function Person() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: person,
    isLoading,
    error,
  } = useSWR(id ? `/api/people/${id}` : null);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>An error occurred.</p>;
  if (!person) return <p>People could not be loaded.</p>;

  return (
    <StyledMain>
      <StyledBackLink href="/people">&#8592; Back to List</StyledBackLink>
      <PersonDetail person={person} />
    </StyledMain>
  );
}
