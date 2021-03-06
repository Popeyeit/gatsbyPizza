import {createContext} from 'react'
import {useStaticQuery,graphql} from 'gatsby'
import React from 'react';

export const contextApp = createContext()

const query = graphql`
  {
    allContentfulPizza {
      nodes {
        category
        id
        title
        price
      }
    }
    allContentfulPizzaSize {
      nodes {
        size
        id
      }
    }
    allContentfulPizzaType {
      nodes {
        id
        kind
      }
    }
  }
`

const Context = ({children}) => {
    const data = useStaticQuery(query)
    return (
        <contextApp.Provider value={data}>
      {children}
          
        </contextApp.Provider>
    );
};

export default Context;