import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "gatsby-theme-material-ui";
import mainNavStyles from "./main-nav.module.css";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";

const navTargets = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

const MainNavForXsToSmDevice = ({ site }) => {
  const [state, setState] = React.useState({
    showDrawer: false,
  });

  const drawerItems = () => {
    return (
      <div>
        <List>
          {navTargets.map((navTarget, index) => (
            <Link underline="none" href={navTarget.href}>
              <ListItem
                button
                key={navTarget.name}
                className={mainNavStyles.drawerItem}
              >
                <Typography color="textPrimary">
                  <ListItemText primary={navTarget.name} />
                </Typography>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );
  };

  const toggleDrawer = () => {
    const currDrawerState = state.showDrawer;
    setState({ showDrawer: !currDrawerState });
  };

  return (
    <div>
      <Grid container alignItems="center">
        <Grid item xs={10}>
          <Link underline="none" href="/">
            <Typography color="textPrimary" variant="h1">
              {site.siteMetadata.title}
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Button onClick={toggleDrawer}>
            <MenuIcon fontSize="large" />
          </Button>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Drawer anchor="right" open={state.showDrawer} onClose={toggleDrawer}>
        {drawerItems()}
      </Drawer>
    </div>
  );
};

const MainNavForMdToXlDevice = ({ site }) => {
  return (
    <Grid container alignItems="baseline">
      <Grid item md={6}>
        <Link underline="none" href="/">
          <Typography color="textPrimary" variant="h1">
            {site.siteMetadata.title}
          </Typography>
        </Link>
      </Grid>
      <Grid item md={2} />
      {navTargets.map(navTarget => {
        return (
          <Grid item md={1} className={mainNavStyles.navItem}>
            <Link underline="none" href={navTarget.href}>
              <Typography color="textPrimary" variant="h6">
                {navTarget.name}
              </Typography>
            </Link>
          </Grid>
        );
      })}
      <Grid item md={1} />
    </Grid>
  );
};

const MainNav = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const theme = useTheme();
  const deviceBetweenXsAndSm = useMediaQuery(
    theme.breakpoints.between("xs", "sm")
  );
  if (deviceBetweenXsAndSm) {
    return <MainNavForXsToSmDevice site={site} />;
  }
  return <MainNavForMdToXlDevice site={site} />;
};

export default MainNav;
