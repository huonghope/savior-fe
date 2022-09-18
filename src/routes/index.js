import React, {Suspense} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

/* Layout */
import CommonLayout from '../layouts/CommonLayout/index';
import AuthLayout from '../layouts/AuthLayout';
import {userRoutes, authRoutes} from './allRoutes';

const Index = () => {
  const availableAuthRoutesPath = authRoutes.map((r) => r['path']);
  const availablePublicRoutesPaths = userRoutes.map((r) => r['path']);

  const Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={Loader()}>
          <Switch>
            <Route path={availableAuthRoutesPath}>
              <AuthLayout>
                {authRoutes.map((route, idx) => (
                  <Route
                    path={route.path}
                    component={route.component}
                    key={idx}
                    exact={true}
                  />
                ))}
              </AuthLayout>
            </Route>

            <Route path={availablePublicRoutesPaths}>
              <CommonLayout>
                {userRoutes.map((route, idx) => (
                  <Route
                    path={route.path}
                    component={route.component}
                    key={idx}
                    exact={true}
                  />
                ))}
              </CommonLayout>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  );
};

export default Index;
