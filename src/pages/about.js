import React from "react";
import SEO from "../components/seo";
import AppLayout from "../layouts/app-layout";
import UnderConstruction from "../components/under-construction/under-construction";

const AboutPage = ({ location }) => {
  return (
    <AppLayout location={location}>
      {/* TODO: Fill out description and meta */}
      <SEO title="About" description="" meta={[]} />
      <UnderConstruction />
    </AppLayout>
  );
};

export default AboutPage;
