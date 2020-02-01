

import React, { Component } from 'react';
import styled from 'styled-components';

// export const Title = styled.h1
//   font-size: 1.5em;
//   color: white;
//   padding: 15px;
// ;

export const Button = styled.button`
font-size: 1em;
margin: 0em 1em;
padding: .8em 1.6em;
border: none;
border-radius: 50px;
color:white;
background:#055BA6;
cursor: pointer;

// background: ${props => props.primary ? "palevioletred" : "white"};

:hover{
background:#0B8AD9;
}
`;

export const LinkButton = styled.button`
font-size: 1em;
margin: 0em 1em;
padding: .8em 1.6em;
border: none;
border-radius: 50px;
color:#0B8AD9;
background:none;
cursor: pointer;


:hover{
text-decoration:underline;
}
`;

