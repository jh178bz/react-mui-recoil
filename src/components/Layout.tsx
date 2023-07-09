import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, useLocation } from '@tanstack/react-location';
import { SelectActions } from '../side-menu';

type LayoutProps = {
    children: React.ReactNode;
};

const drawerWidth = 240;
const menuItemList = ['Inbox', 'Starred', 'Send email', 'Drafts'];

export const Layout = ({ children }: LayoutProps) => {
    const location = useLocation();
    const selectMenu = SelectActions.useSelectMenu();

    const handleMenuItemClick = (menuItem: string) => {
        selectMenu(menuItem);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Clipped drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {menuItemList.map((text, index) => {
                            const isCurrentPage = location.current.pathname === `/${text.toLowerCase()}`;
                            return (
                                <Link to={`/${text.toLowerCase()}`} key={text}>
                                    <ListItem disablePadding>
                                        <ListItemButton
                                            selected={isCurrentPage}
                                            onClick={() => handleMenuItemClick(text)}
                                            sx={isCurrentPage ? { backgroundColor: 'lightgray' } : {}}
                                        >
                                            <ListItemIcon>
                                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            );
                        })}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};
