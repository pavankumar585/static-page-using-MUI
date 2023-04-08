import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PetsIcon from "@mui/icons-material/Pets";
import {
  Box,
  styled,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Notifications, Mail } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { sm: "block", xs: "none" } }}>
          PAVAN DEV
        </Typography>
        <PetsIcon sx={{ display: { sm: "none", xs: "block" } }} />
        <Search
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
        </Icons>
        <UserBox sx={{ cursor: "pointer" }}>
          <Avatar
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Typography component="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
