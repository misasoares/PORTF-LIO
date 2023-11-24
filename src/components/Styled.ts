import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #1c181f;
`;
export const SectionStyled = styled.section`
  display: flex;
  justify-content: space-between;
  width: 97vw;
  position: fixed;
  background-color: #1c181f;
  padding: 10px;
`;

export const ImgContainer = styled.div`
  width: 30%;
  height: 30%;
  border: solid #549e71 10px;
  border-radius: 100%;
  overflow: hidden;
  background-color: #161616;
  box-shadow: #549e71 1px 1px 15px;
`;

export const ImgEuStyled = styled.img`
  width: 100%;
  height: auto;
`;
