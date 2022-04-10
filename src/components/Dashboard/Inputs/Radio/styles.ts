import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;

    span {
        align-self: center;
        font-weight: 700;
        font-size: 1.15rem;
    }
   
   ul {
       display: grid;
       grid-template-columns: 125px 125px;
       justify-content: center ;
       gap: 1rem;
       height: 2rem;

      li {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
      }

        /* Não selecionado */
        .disable::before {
           content: " ";
           display: flex;
           width: 8px;
           height: 8px;
           border-radius: 50%;
           border: 1.5px solid black;
           margin-right: 0.5rem;
       }
          /* Selecionado */
        .active::before{
           content: " ";
           display: flex;
           width: 8px;
           height: 8px;
           border-radius: 50%;
           background: var(--primary) ;
           border: 2px solid var(--secondary);
           margin-right: 0.5rem;
       }
   }
`