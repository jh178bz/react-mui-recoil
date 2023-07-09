import { CssBaseline } from '@mui/material';
import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { Router } from '@tanstack/react-location';
import { routes, location } from './Router';

const App: FC = () => {
    return (
        <div className="App">
            <CssBaseline />
            <RecoilRoot>
                <Router routes={routes} location={location} />
            </RecoilRoot>
        </div>
    );
};

export default App;
