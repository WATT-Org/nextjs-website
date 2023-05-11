import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    id: "1",
    page: "Home",
    link: "/",
    name: "HOME",
  },
  {
    id: "2",
    page: "About",
    link: "/about",
    name: "ABOUT",
  },
  {
    id: "3",
    page: "Contact",
    link: "/contact",
    name: "CONTACT",
  },
  {
    id: "4",
    page: "Blog",
    link: "/blogs",
    name: "BLOGS",
  },
];

function DrawerAppBar(props) {
  const drawerWidth = 240;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //signin/up
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const drawer = (
    <React.Fragment>
      <Box
        onClick={handleDrawerToggle}
        sx={{
          textAlign: "center",
          bgcolor: "#1f2937",
          height: "100%",
          color: "#ffffff90",
        }}
        className="backdrop-blur-lg"
      >
        <List>
          {navItems.map((item) => (
            <Link key={item.id} href={item.link}>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
          <Link href="/login">
            <Button
              sx={{
                backgroundColor: "#54a0ff !important",
                color: "white",
                fontWeight: 500,
                fontSize: "1rem",
                marginLeft: "1rem",
                padding: "3px 15px",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#f1b51d",
                },
              }}
            >
              Login
            </Button>
          </Link>
        </List>
      </Box>
    </React.Fragment>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          sx={{ bgcolor: "#ffffff10" }}
          className="backdrop-blur-lg"
        >
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: { xs: 0, sm: 1 },
                justifyContent: "end",
                display: { xs: "block", sm: "block" },
                marginLeft: { xs: "auto" },
              }}
            >
              <div className="flex">

              <Link href="/">
                  <Image
                    src={"/assets/images/logo.png"}
                    width={40}
                    height={40}
                    alt="WATT logo"
                  />
              </Link>
                  <span className="ml-2 mt-1 text-2xl font-semibold whitespace-wrap text-white">
                    WATT
                  </span>
                    </div>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Link key={item.id} href={item.link}>
                  <Button sx={{ color: "#fff" }}>{item.name}</Button>
                </Link>
              ))}
              <Link href="/l">
                <Button
                  className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 to-blue-500"
                  sx={{
                    color: "white",
                    fontWeight: 500,
                    fontSize: "1rem",

                    marginLeft: "1rem",
                    padding: "3px 15px",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "#f1b51d",
                    },
                  }}
                >
                  Login
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default DrawerAppBar;
