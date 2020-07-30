import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';

import Medidas from './pages/medidas';
import Video from './pages/video';

export default function Routs() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/medidas" component={Medidas} />
            <Route path="/video" component={Video} />
        </Switch>
    );
}
