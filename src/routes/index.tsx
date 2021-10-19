import { Switch, Route, Redirect } from 'react-router-dom'

// Pages //
import Login from '../pages/Login'
import Home from '../pages/Home'
import NewOrder from '../pages/NewOrder'

export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact render={() => (
                <Redirect to='/login' />
            )} />
            <Route path='/home' component={Home} />
            <Route component={Login} path='/login' exact />
            <Route component={NewOrder} path='/order/new' />
        </Switch>
    )
}