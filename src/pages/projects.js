import React from "react";
import AppLayout from "../layouts/app-layout";
import UnderConstruction from "../components/under-construction/under-construction";

const ProjectsPage = ({ location }) => {
  return (
    <AppLayout location={location}>
      <UnderConstruction />
    </AppLayout>
  );
};

export default ProjectsPage;
