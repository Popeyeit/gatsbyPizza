import React from 'react';
import {graphql,useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'

const query =  graphql`
{
  file(relativePath: {eq: "logo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const LogoSite = () => {
    const {
        file: {
          childImageSharp: { fluid },
        },
      } = useStaticQuery(query)

    return   (
      <div className='logo'>
    <Image fluid={fluid} />
    <p>Gatsby Pizza
    <span>самая вкусная пицца во вселенной</span></p>
    </div>
    );
};

export default LogoSite;