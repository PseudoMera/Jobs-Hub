import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    width: 100vw;
    height: 15vh;
    background: #242933;
    align-self: flex-end;
`;



function Footer() {
    return (
        <FooterWrapper>
                <div className="content has-text-centered">
                    <p>
                        <strong style={{color:'#b0bec5'}}>JobsHub 
                        by </strong> <a href="https://github.com/PseudoMera"
                            target="_blank"
                            rel="noopener noreferrer">Albin E. Frias Rojas</a>
                    </p>
                </div>
        </FooterWrapper>
    );
}

export default Footer;