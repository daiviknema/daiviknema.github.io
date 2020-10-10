import React from "react";
import AppLayout from "../layouts/app-layout";
import UnderConstruction from "../components/under-construction/under-construction";

const BlogIndex = ({ location }) => {
  return (
    <AppLayout location={location}>
      <UnderConstruction />
    </AppLayout>
  );
};

export default BlogIndex;
