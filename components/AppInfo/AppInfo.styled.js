import styled from "styled-components";
import Link from "next/link";

export const StyledH3 = styled.h3`
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 600;
`;

export const StyledLinkWrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
  padding: 5px 25px;
  border-radius: var(--radius-card);
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;
`;

export const StyledLinkPeople = styled(StyledLink)`
  background-color: var(--color-primary);
`;

export const StyledLinkScience = styled(StyledLink)`
  background-color: #e8a838;
`;

export const StyledLinkPlaylists = styled(StyledLink)`
  background-color: #4a9b8e;
`;
