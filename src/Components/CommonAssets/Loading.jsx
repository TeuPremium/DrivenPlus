import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';


const Loading = ({ type, color }) => (
    
   <Container> 
   <div>
    <ReactLoading type={'spinningBubbles'} color={color} height={150} width={150} />
    </div>
    </Container>
);

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 240px;
`
 
export default Loading;
