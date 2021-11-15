import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 0.5rem;
    height: 100%;
    z-index: 2;

    p, span, li {
        font-size: 0.75rem;
    }

    .select-options {
        position: relative;

        display: flex;
        align-items: flex-end;
        justify-content: center;

        border-bottom: 1px solid var(--primary);

        span {
            text-align: center;
        }
 
        ul {
            position: absolute;
            top: 1.5rem;
            left: 0;

            background: var(--white);
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

            li {
                height: 2rem;
                width: 6rem;
                
                display: flex;
                align-items: center;
                padding: 0.25rem;
    
                font-size: 0.85rem;
                cursor: pointer;
    
                &:hover {
                    background-color: #dfdfdf;
                }
            }
        }

        svg {
            margin-left: 1rem;
        }
    }   
`