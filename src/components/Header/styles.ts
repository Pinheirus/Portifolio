import styled from 'styled-components'

export const HeaderContainer = styled.header`
  
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 2.5rem;

    a {
      text-decoration: none;
      width: 3rem;
      height: 3rem;
      font-size: 1.125rem;
      gap: 15px;
      line-height: 1.3;
      padding: 1rem 3rem;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      
    }
  }
`