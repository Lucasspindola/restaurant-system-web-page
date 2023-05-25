import styled from "styled-components";

export const ContainerDashboard = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(0, 103, 129);
  color: #fff;
  /* display: flex; */
  max-width: 100vw;

  img {
    border-radius: 100%;
    min-width: 50px;
    min-height: 50px;
    max-width: 70px;
    max-height: 70px;
    margin: 0 0;
  }
  .btnProfileEdit {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0 5%;
    border-radius: 100%;
    width: 55px;
    height: 55px;
    outline: none;
  }
  main {
    display: flex;
    padding: 30px 0;
  }
  header {
    height: 72px;
    width: 100%;
    border-bottom: solid 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      cursor: pointer;
      margin: 0 5%;
      min-height: 32px;
      min-width: 55.49px;
      border: none;
      border-radius: 4px;
      background-color: rgba(33, 37, 41, 1);
      color: #fff;
    }
  }

  .contactCurrent {
    font-family: inter;
    font-style: Mixed;
    font-size: 12px;
    color: #868e96;
    font-weight: 400;
  }

  .ulHours {
    background-color: var(--brand-2);
    display: flex;
  }
  main {
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    margin: 0 20% 0 20%;
    gap: 30px;
  }
  .restaurant-list {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0;
    list-style: none;
    gap: 30px;
  }

  .restaurant-list::-webkit-scrollbar {
    height: 6px;
  }

  .restaurant-list::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 3px;
  }

  .restaurant-list::-webkit-scrollbar-track {
    background-color: transparent;
  }

  @media only screen and (min-width: 700px) {
    main {
      display: flex;
      flex-direction: column;
      padding: 30px 0;
      max-width: 100vw;
      /* margin: 0 20% 0 20%; */
      gap: 30px;
    }

    header {
      button {
        margin: 0 20% 0 0;
      }
    }
  }
`;
