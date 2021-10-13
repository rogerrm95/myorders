import {Switch, Route} from 'react-router-dom'

// Pages //
import Login from '../pages/Login'

export default function Routes() {
    return (
            <Switch>
                <Route component={Login} path='/login' exact />
            </Switch>
    )
}