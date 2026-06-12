import useSWR from "swr";
import styled from "styled-components";

export default function PersonForm() {
  const { data: people, isLoading, error } = useSWR("/api/people");

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>An error occurred.</p>;
  if (!people) return <p>People could not be loaded.</p>;

  return (
    <form>
      <fieldset>
        <legend>Add A Person</legend>
        <StyledFormFlex>
          <StyledFormSection>
            <label htmlFor="name">
              Name<span aria-hidden>*</span>
            </label>
            <StyledInputName
              type="text"
              id="name"
              name="name"
              required
              aria-required="true"
            ></StyledInputName>
          </StyledFormSection>
          <StyledFormSection>
            <label htmlFor="birth_year">
              Year Of Birth<span aria-hidden>*</span>
            </label>
            <StyledInputYear
              type="text"
              id="birth_year"
              name="birth_year"
              maxLength="4"
              required
              aria-required="true"
            ></StyledInputYear>
          </StyledFormSection>
        </StyledFormFlex>
        <StyledButtonWrapper>
          <button type="submit">Add</button>
          <button type="button">Clear</button>
        </StyledButtonWrapper>
      </fieldset>
    </form>
  );
}

const StyledFormFlex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const StyledFormSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledInputName = styled.input`
  width: 13rem;
`;

const StyledInputYear = styled.input`
  width: 6rem;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 1rem;
  gap: 1rem;
`;
