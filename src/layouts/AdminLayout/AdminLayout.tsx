import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Input,
} from '@material-tailwind/react';
import { PresentationChartBarIcon, ShoppingBagIcon, UserCircleIcon, Cog6ToothIcon, InboxIcon, PowerIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
//
import { Navbar, MobileNav, Button, Menu, MenuHandler, MenuList, MenuItem, Avatar, IconButton } from '@material-tailwind/react';
import {
    CubeTransparentIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    RocketLaunchIcon,
    Bars2Icon,
} from '@heroicons/react/24/outline';

// profile menu component
const profileMenuItems = [
    {
        label: 'My Profile',
        icon: UserCircleIcon,
    },
    {
        label: 'Edit Profile',
        icon: Cog6ToothIcon,
    },
    {
        label: 'Inbox',
        icon: InboxArrowDownIcon,
    },
    {
        label: 'Help',
        icon: LifebuoyIcon,
    },
    {
        label: 'Sign Out',
        icon: PowerIcon,
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button variant="text" color="blue-gray" className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <ChevronDownIcon strokeWidth={2.5} className={`h-3 w-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded ${
                                isLastItem ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10' : ''
                            }`}
                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
                                strokeWidth: 2,
                            })}
                            <Typography as="span" variant="small" className="font-normal" color={isLastItem ? 'red' : 'inherit'}>
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

// nav list menu
const navListMenuItems = [
    {
        title: '@material-tailwind/html',
        description: 'Learn how to use @material-tailwind/html, packed with rich components and widgets.',
    },
    {
        title: '@material-tailwind/react',
        description: 'Learn how to use @material-tailwind/react, packed with rich components for React.',
    },
    {
        title: 'Material Tailwind PRO',
        description: 'A complete set of UI Elements for building faster websites in less time.',
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const renderItems = navListMenuItems.map(({ title, description }) => (
        <a href="#" key={title}>
            <MenuItem>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                    {title}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                    {description}
                </Typography>
            </MenuItem>
        </a>
    ));

    return (
        <React.Fragment>
            <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex">
                            <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{' '}
                            <ChevronDownIcon strokeWidth={2} className={`h-3 w-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
                    <Card color="blue" shadow={false} variant="gradient" className="col-span-3 grid h-full w-full place-items-center rounded-md">
                        <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
                    </Card>
                    <ul className="col-span-4 flex w-full flex-col gap-1">{renderItems}</ul>
                </MenuList>
            </Menu>
            <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
                <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{' '}
            </MenuItem>
            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">{renderItems}</ul>
        </React.Fragment>
    );
}

// nav list component
const navListItems = [
    {
        label: 'Account',
        icon: UserCircleIcon,
    },
    {
        label: 'Blocks',
        icon: CubeTransparentIcon,
    },
    {
        label: 'Docs',
        icon: CodeBracketSquareIcon,
    },
];

function NavList() {
    return (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <NavListMenu />
            {navListItems.map(({ label, icon }, key) => (
                <Typography key={label} as="a" href="#" variant="small" color="blue-gray" className="font-normal">
                    <MenuItem className="flex items-center gap-2">
                        {React.createElement(icon, { className: 'h-[18px] w-[18px]' })} {label}
                    </MenuItem>
                </Typography>
            ))}
        </ul>
    );
}

const AdminLayout = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };
    //
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener('resize', () => window.innerWidth >= 960 && setIsNavOpen(false));
    }, []);
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr] lg:gap-8">
            <div className="w-full h-full rounded-lg ">
                <div>
                    <div>
                        {' '}
                        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                            <div className="mb-2 p-4">
                                <Typography variant="h5" color="blue-gray">
                                    Sidebar
                                </Typography>
                            </div>
                            <List>
                                <Accordion
                                    open={open === 1}
                                    icon={
                                        <ChevronDownIcon
                                            strokeWidth={2.5}
                                            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? 'rotate-180' : ''}`}
                                        />
                                    }
                                >
                                    <ListItem className="p-0" selected={open === 1}>
                                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                                            <ListItemPrefix>
                                                <PresentationChartBarIcon className="h-5 w-5" />
                                            </ListItemPrefix>
                                            <Typography color="blue-gray" className="mr-auto font-normal">
                                                Dashboard
                                            </Typography>
                                        </AccordionHeader>
                                    </ListItem>
                                    <AccordionBody className="py-1">
                                        <List className="p-0">
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                </ListItemPrefix>
                                                Analytics
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                </ListItemPrefix>
                                                Reporting
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                </ListItemPrefix>
                                                Projects
                                            </ListItem>
                                        </List>
                                    </AccordionBody>
                                </Accordion>
                                <Accordion
                                    open={open === 2}
                                    icon={
                                        <ChevronDownIcon
                                            strokeWidth={2.5}
                                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? 'rotate-180' : ''}`}
                                        />
                                    }
                                >
                                    <ListItem className="p-0" selected={open === 2}>
                                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                            <ListItemPrefix>
                                                <ShoppingBagIcon className="h-5 w-5" />
                                            </ListItemPrefix>
                                            <Typography color="blue-gray" className="mr-auto font-normal">
                                                E-Commerce
                                            </Typography>
                                        </AccordionHeader>
                                    </ListItem>
                                    <AccordionBody className="py-1">
                                        <List className="p-0">
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                </ListItemPrefix>
                                                Orders
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                </ListItemPrefix>
                                                Products
                                            </ListItem>
                                        </List>
                                    </AccordionBody>
                                </Accordion>
                                <Accordion
                                    open={open === 3}
                                    icon={
                                        <ChevronDownIcon
                                            strokeWidth={2.5}
                                            className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? 'rotate-180' : ''}`}
                                        />
                                    }
                                >
                                    <ListItem className="p-0" selected={open === 3}>
                                        <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
                                            <ListItemPrefix>
                                                <ShoppingBagIcon className="h-5 w-5" />
                                            </ListItemPrefix>
                                            <Typography color="blue-gray" className="mr-auto font-normal">
                                                Pitch
                                            </Typography>
                                        </AccordionHeader>
                                    </ListItem>
                                    <AccordionBody className="py-1">
                                        <List className="p-0">
                                            <Link to={'pitch'}>
                                                <ListItem>
                                                    <ListItemPrefix>
                                                        <ChevronRightIcon strokeWidth={4} className="h-3 w-5" />
                                                    </ListItemPrefix>
                                                    Pitch Management
                                                </ListItem>
                                            </Link>
                                            <Link to={'pitch/add'}>
                                                <ListItem>
                                                    <ListItemPrefix>
                                                        <ChevronRightIcon strokeWidth={4} className="h-3 w-5" />
                                                    </ListItemPrefix>
                                                    Create Pitch
                                                </ListItem>
                                            </Link>
                                        </List>
                                    </AccordionBody>
                                </Accordion>
                                <hr className="my-2 border-blue-gray-50" />
                                <ListItem>
                                    <ListItemPrefix>
                                        <InboxIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Inbox
                                    <ListItemSuffix>
                                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                                    </ListItemSuffix>
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <UserCircleIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Profile
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <Cog6ToothIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Settings
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <PowerIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Log Out
                                </ListItem>
                            </List>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="h-full rounded-lg bg-gray-100">
                <div>
                    <Navbar className="mx-auto max-w-screen-full p-2 lg:px-8">
                        <div className="relative mx-auto flex items-center text-blue-gray-900">
                            <Typography as="a" href="#" className="mr-4 ml-2 cursor-pointer py-1.5 font-medium">
                                <div className="relative flex w-full gap-2 md:w-max">
                                    <Input
                                        type="search"
                                        label="Type here..."
                                        className="pr-20 w-[400px]"
                                        containerProps={{
                                            className: 'min-w-[288px]',
                                        }}
                                    />
                                    <Button size="sm" className="!absolute right-1 top-1 rounded">
                                        Search
                                    </Button>
                                </div>
                            </Typography>
                            <div className="absolute top-2/4 left-2/4 hidden -translate-x-1.5/4 -translate-y-2/4 lg:block">
                                <NavList />
                            </div>
                            <IconButton size="sm" color="blue-gray" variant="text" onClick={toggleIsNavOpen} className="ml-auto mr-2 lg:hidden">
                                <Bars2Icon className="h-6 w-6" />
                            </IconButton>
                            <ProfileMenu />
                        </div>
                        <MobileNav open={isNavOpen} className="overflow-scroll">
                            <NavList />
                        </MobileNav>
                    </Navbar>
                </div>
                <main className="p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
