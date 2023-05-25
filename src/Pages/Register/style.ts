import styled from "styled-components";
export const RegisterContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--brand-1);

  p {
    display: flex;
    margin: 0 0 0 5%;
    color: var(--white-1);
  }
  label {
    margin: 0 0 0 5%;
    font-family: inter;
    font-style: regular;
    font-size: var(--font-size-medium);
    color: var(--white-1);
  }
  img {
    max-width: 100%;
    max-height: 100%;
    width: 97.59px;
    height: 16.9px;
  }
  .returnBtn {
    cursor: pointer;
    width: 79.54px;
    height: 40px;
    background-color: var(--grey-0);
    color: var(--white-1);
    border: none;
    border-radius: 3.2px;
    border: none;
  }
  .returnBtn:hover {
    background-color: var(--brand-2);
  }
  .containerLogoAndBtnReturn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
    width: 90%;
    max-width: 369px;
  }

  .containerForm {
    width: 90%;
    max-width: 369px;
    background-color: var(--brand-2);
    border-radius: 5px;
  }
  .ContainerTitleForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 30px 0;

    h1 {
      font-family: inter;
      font-style: bold;
      font-size: var(--font-size-h1);
      line-height: 28px;
      font-weight: 700;
      color: var(--white-1);
    }

    span {
      font-family: inter;
      font-style: regular;
      font-size: 12px;
      line-height: 22px;
      font-weight: 400;

      color: #868e96;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 30px 0;
    width: 90%;
    gap: 10px;
  }

  input {
    font-family: inter;
    font-style: regular;
    font-size: 12.99px;
    line-height: 21.1px;
    width: 100%;
    height: 38px;
    border: none;
    background-color: var(--grey-0);
    color: #868e96;
    margin: 0 5% 0 5%;
    border-radius: 3.2px;
    font-weight: 400;
  }

  select {
    cursor: pointer;
    font-family: inter;
    font-style: regular;
    font-size: 12.99px;
    line-height: 21.1px;
    width: 100%;
    height: 38px;
    border: none;
    background-color: var(--grey-0);
    color: #868e96;
    margin: 0 5% 0 5%;
    border-radius: 3.2px;
    padding: 8px;
    font-weight: 400;
  }
  option {
    cursor: pointer;
    color: white;
  }

  .btnRegister {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 38px;
    border: none;
    background-color: var(--brand-3);

    color: var(--white-1);
    border-radius: 3.2px;
    margin: 0 0 0 5%;
  }
  .btnRegister:hover {
    background-color: var(--brand-3-hover);
  }
`;
