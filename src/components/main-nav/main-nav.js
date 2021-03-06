import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";

const navTargets = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog/1",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

const DrawerItem = styled.div`
  min-width: 17rem;

  @media screen and (min-width: 600px) {
    min-width: 20rem;
  }
`;

const NavMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ::after {
    content: "";
    height: 2px;
    width: ${props => (props.isActive ? "90%" : "0%")};
    background: ${props => props.underlineColor};
    -o-transition: 0.2s;
    -ms-transition: 0.2s;
    -moz-transition: 0.2s;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }

  :hover::after {
    display: block;
    width: 90%;
  }
`;

const MainNavForXsToSmDevice = ({ site, location }) => {
  const [state, setState] = React.useState({
    showDrawer: false,
  });

  const theme = useTheme();

  const drawerItems = () => {
    return (
      <div>
        <List>
          {navTargets.map(navTarget => (
            <AniLink style={{textDecoration: 'none'}} underline="none" paintDrip to={navTarget.href} hex={theme.palette.text.primary}>
              <ListItem
                button
                key={navTarget.name}
                style={
                  location?.pathname?.includes(navTarget.href)
                    ? { background: theme.palette.primary.main }
                    : {}
                }
              >
                <DrawerItem>
                  <Typography color="textPrimary">
                    <ListItemText primary={navTarget.name} />
                  </Typography>
                </DrawerItem>
              </ListItem>
            </AniLink>
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
      <Grid container alignItems="stretch">
        <Grid item xs={10}>
          <AniLink style={{textDecoration: 'none'}} underline="none" paintDrip to="/" hex={theme.palette.text.primary}>
            <Typography color="textPrimary" variant="h1">
              {site.siteMetadata.title}
            </Typography>
          </AniLink>
        </Grid>
        <Grid item xs={1} style={{margin: "auto 0px 0px 0px"}}>
          <Button onClick={toggleDrawer}>
            <MenuIcon fontSize="large" />
          </Button>
        </Grid>
      </Grid>
      <Drawer anchor="right" open={state.showDrawer} onClose={toggleDrawer}>
        {drawerItems()}
      </Drawer>
    </div>
  );
};

const MainNavForMdToXlDevice = ({ site, location }) => {
  const theme = useTheme();
  console.log(location);
  return (
    <Grid container alignItems="baseline">
      <Grid item md={6}>
        <AniLink style={{textDecoration: 'none'}} underline="none" paintDrip hex={theme.palette.text.primary} to="/">
          <Typography color="textPrimary" variant="h1">
            {site.siteMetadata.title}
          </Typography>
          </AniLink>
      </Grid>
      <Grid item md={2} />
      {navTargets.map(navTarget => {
        return (
          <Grid
            item
            md={1}
            key={navTarget.href}
            style={{ textAlign: "center" }}
          >
            <NavMenuItem
              isActive={location?.pathname?.includes(navTarget.href)}
              underlineColor={theme.palette.text.primary}
            >
              <AniLink style={{textDecoration: 'none'}} underline="none" paintDrip hex={theme.palette.text.primary} to={navTarget.href}>
                <Typography color="textPrimary" variant="h6">
                  {navTarget.name}
                </Typography>
              </AniLink>
            </NavMenuItem>
          </Grid>
        );
      })}
      <Grid item md={1} />
    </Grid>
  );
};

const MainNav = ({ location }) => {
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
    return <MainNavForXsToSmDevice site={site} location={location} />;
  }
  return <MainNavForMdToXlDevice site={site} location={location} />;
};

export default MainNav;
