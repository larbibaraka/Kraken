import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Boards from './Components/Boards/Boards';

const Routes = () => (
    <Switch>
        <Route path="/board/" component={Boards} />
    </Switch>
);

export default Routes;