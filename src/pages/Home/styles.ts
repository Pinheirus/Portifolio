import styled from "styled-components";

export const CanvasContainer = styled.div`

    
`;

export const GridContent = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: calc(100vh - 32px - 48px);
    column-gap: 4rem; 
  
    .hero { 
        font-size:4rem;
        padding-top: 6rem;
    }

    .hero-text {
        font-size: 1.3rem;
        font-weight: 600;
        color:${(props) => props.theme['gray-400']};
        padding-right: 2rem;
        padding-top:2rem;
    }

    .hero-work {
        font-size:0.975rem;
        color: ${(props) => props.theme['gray-600']};
        padding-top: 1.125rem;
        font-weight: 400;
    }
`;