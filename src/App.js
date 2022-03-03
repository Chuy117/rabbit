import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contacto from './screens/Contacto';
import Home from './screens/Home';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useStyle } from './styles/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DialpadIcon from '@material-ui/icons/Dialpad';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

function App() {

  const clases = useStyle();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {

    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);

  };

  function handleListKeyDown(event) {

    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }

  }

  const prevOpen = React.useRef(open);

  React.useEffect(() => {

    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;

  }, [open]);

  return (

    <Router>

      <div className="App">

        <Fab variant="extended" className={clases.fabButton} ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}>
          <FavoriteIcon />
          Conocer más
        </Fab>

        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>
                      <Link to="/">
                        <ListItemIcon>
                          <DialpadIcon fontSize="small" />
                        </ListItemIcon>
                        Pin Pad
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/contacto">
                        <ListItemIcon>
                          <PermContactCalendarIcon fontSize="small" />
                        </ListItemIcon>
                        Contacto
                      </Link>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

      </div>

      <div className="App">
        <Switch>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>



  );

}

export default App;
