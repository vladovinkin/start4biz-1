import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './content.css';


function Content() {
    return (
        <div className="content-main">
            <BrowserRouter>
                <Switch>
                    <Route path="/about">
                        it's about
                    </Route>
                    <Route path="/toBusiness">
                        it's toBusiness
                    </Route>
                    <Route path="/toFinorg">
                        it's toFinorg
                    </Route>
                    <Route path="/">
                        it's index
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Content;