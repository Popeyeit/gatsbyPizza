import React from 'react';
import  Context  from "./src/Context"
import './src/main.css'

export const wrapRootElement = ({ element }) => (
  <Context>{element}</Context>
)