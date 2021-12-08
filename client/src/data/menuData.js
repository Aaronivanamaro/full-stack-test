import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export const menuItems = [
    {
        title: 'Home',
        link: '/',
        submenu: []
    },
    {
        title: 'Zoo',
        link: '/zoo',
        submenu: []
    },
    {
        title: 'Url Parser',
        link: '/url-parser',
        submenu: []
    },
    {
        title: 'Error Alarm',
        link: '/error-alarm',
        submenu: []
    },
    {
        title: 'Contact',
        link: '/contact',
        submenu: [
            {
                text: '(+54) 11 2297 2268',
                icon: <LocalPhoneIcon />
            },
            {
                text: '/aaron-ivan-amaro/',
                icon: <LinkedInIcon />
            },
            {
                text: 'aaronivanamaro@gmail.com',
                icon: <EmailIcon />
            }
        ]
    },
    {
        title: 'Technology',
        link: '/tech',
        submenu: []
    }
]
