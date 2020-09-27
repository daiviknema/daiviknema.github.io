import React from "react";
import { graphql } from "gatsby";
import AppLayout from "../layouts/app-layout";

const App = ({ data, location }) => {
  return <AppLayout>This is the home page</AppLayout>;
};

export default App;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
