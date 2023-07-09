import { ReactLocation, Route } from '@tanstack/react-location';
import { Layout } from './components/Layout';
import Inbox from './pages/Inbox';
import Starred from './pages/Starred';
import SendEmail from './pages/SendEmail';
import Drafts from './pages/Drafts';

export const location = new ReactLocation();
export const routes: Route[] = [
    {
        path: '/',
        element: (
            <Layout>
                <div>Home</div>
            </Layout>
        ),
    },
    {
        path: 'inbox',
        element: <Inbox />,
    },
    {
        path: 'starred',
        element: <Starred />,
    },
    {
        path: 'send-email',
        element: <SendEmail />,
    },
    {
        path: 'drafts',
        element: <Drafts />,
    },
];
