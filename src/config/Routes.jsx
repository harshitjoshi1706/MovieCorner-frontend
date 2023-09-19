import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Signup from '../pages/Signup'; // Corrected component name

const Routes = () => {
    return (
        <Switch>
            <Route path='/movies' component={Catalog} />
            <Route path='/tv' component={Catalog} />
            <Route path='/:category/search/:keyword' component={Catalog} />
            <Route path='/:category/:id' component={Detail} />
            <Route path='/' exact component={Home} />
            <Route path='/Signup' exact component={Signup} />
        </Switch>
    );
}

export default Routes;


// import React from 'react';

// import { Route, Switch } from 'react-router-dom';

// import Home from '../pages/Home';
// import Catalog from '../pages/Catalog';
// import Detail from '../pages/detail/Detail';
// import signup from '../pages/Signup';

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
//             <Route
//                 path='/Signup'
//                 exact
//                 component={signup}
//             />
//         </Switch>
//     );
// }

// export default Routes;
