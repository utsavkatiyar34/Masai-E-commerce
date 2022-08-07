import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../Store/actions";

export default function ButtonAppBar() {
  const { token } = useSelector((state) => state.login);
  const dispatch=useDispatch();
  const [state, setState] = React.useState(false);
  let handleLogout=()=>{
  dispatch(logOut());
  }

  const toggleDrawer = (open) => {
    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250, color: "purple" }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon sx={{ color: "purple" }} />
                ) : (
                  <MailIcon sx={{ color: "purple" }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon sx={{ color: "purple" }} />
                ) : (
                  <MailIcon sx={{ color: "purple" }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#F5F5DC" }}>
        <Drawer
          anchor={"left"}
          open={state}
          onClose={() => toggleDrawer(false)}
        >
          {list()}
        </Drawer>
        <Toolbar>
          <IconButton
            onClick={() => toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "purple" }}
          >
            <MenuIcon />
          </IconButton>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "purple" }}
            >
              Store
            </Typography>
          </NavLink>
          {!token? (<><Button
            varient="solid"
            sx={{
              backgroundColor: "purple",
              color: "white",
              height: "35px",
              width: "100px",
              marginLeft: "auto",
              marginRight: "-70vw",
              "&:hover": { backgroundColor: "purple", color: "white" },
            }}
          >
            <NavLink
              to="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              Signup
            </NavLink>
          </Button>
          <Button
            varient="solid"
            sx={{
              backgroundColor: "purple",
              color: "white",
              height: "35px",
              width: "100px",
              marginLeft: "auto",
              marginRight: "1vw",
              "&:hover": { backgroundColor: "purple", color: "white" },
            }}
          >
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Login
            </NavLink>
          </Button> </>):(<>
            <Button
            varient="solid"
            onClick={handleLogout}
            sx={{
              backgroundColor: "purple",
              color: "white",
              height: "35px",
              width: "100px",
              marginLeft: "auto",
              marginRight: "1vw",
              "&:hover": { backgroundColor: "purple", color: "white" },
            }}
          >Logout
          </Button>
          </>) }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
