import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import PageWrapper from './PageWrapper';

var Routes =
    <Route path="/" component={PageWrapper}>
        <IndexRoute component={HomePage}/>
    </Route>;

export default Routes;