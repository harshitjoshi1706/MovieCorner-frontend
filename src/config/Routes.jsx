import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Login from '../pages/Login';
import Signup from '../pages/Signup'; // Import the Signup component

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/Login' // Place /signup route above other routes
                component={Login}
            />
            <Route
                path='/signup' // Place /signup route above other routes
                component={Signup}
            />
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routes;


// import React from 'react';

// import { Route, Switch } from 'react-router-dom';

// import Home from '../pages/Home';
// import Catalog from '../pages/Catalog';
// import Detail from '../pages/detail/Detail';

// const Routes = () => {
//     return (
//         <Switch>
//             <Route
//                 path='/:category/search/:keyword'
//                 component={Catalog}
//             />
//             <Route
//                 path='/:category/:id'
//                 component={Detail}
//             />
//             <Route
//                 path='/:category'
//                 component={Catalog}
//             />
//             <Route
//                 path='/'
//                 exact
//                 component={Home}
//             />
//         </Switch>
//     );
// }

// export default Routes;
