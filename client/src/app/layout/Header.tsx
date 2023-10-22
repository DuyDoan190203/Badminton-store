import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import {  Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import SignedInMenu from "./SignedInMenu";

const midLinks = [
  {title: 'catalog', path: '/catalog'},
  {title: 'about', path: '/about'},
  {title: 'contact', path: '/contact'},
]

const rightLinks = [
  {title: 'login', path: '/login'},
  {title: 'register', path: '/register'},
]

interface Props{
  darkMode: boolean;
  handleThemeChange: () => void;
  switchIcons: {
    on: JSX.Element;   // Custom icon for dark mode
    off: JSX.Element;  // Custom icon for light mode
  };
}

const navStyles = {
  color: 'white',           // Text color
  textDecoration: 'none',   // Remove underlines
  fontWeight: 600,          // Font weight
  fontSize: '24px',         // Font size
  fontFamily: 'Arial, sans-serif',  // Font family
  textTransform: 'uppercase',      // Uppercase text
  letterSpacing: '1px',             // Letter spacing
  transition: '0.3s',              // Smooth transition on hover
  '&:hover': {
    color: 'lightblue',             // Change color on hover
    transform: 'scale(1.05)',       // Enlarge text on hover
  },
};
export default function Header({ darkMode, handleThemeChange, switchIcons }: Props & { switchIcons: { on: JSX.Element; off: JSX.Element } }) {
  const {basket} = useAppSelector(state => state.basket);
  const {user} = useAppSelector (state => state.account);
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0)
  return(
    <AppBar position='static' sx ={{mb: 5, backgroundColor: 'gray'}}>
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

        <Box display= 'flex' alignItems='center'>
        <Typography variant="h6" component={NavLink} 
        to ='/'
        sx={navStyles}>
          RacketsRain 
        </Typography>
        <Switch
            checked={darkMode}
            onChange={handleThemeChange}
            icon={switchIcons.off}    /* Icon when in the "off" (light) state */
            checkedIcon={switchIcons.on}  /* Icon when in the "on" (dark) state */
          />
        </Box>

        <List sx={{display: 'flex'}}>
          {midLinks.map(({title, path}) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={navStyles}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box display= 'flex' alignItems='center'>
        <IconButton component={Link} to='/basket' size='large' edge='start' color='inherit' sx={{mr: 2}}>
            <Badge badgeContent={itemCount} color="secondary">
              <ShoppingCart/>
          </Badge>
        </IconButton>
        {user? (
            <SignedInMenu />
        ): (
          <List sx={{display: 'flex'}}>
            {rightLinks.map(({title, path}) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={navStyles}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}