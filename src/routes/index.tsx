import { Switch, Route, Redirect } from 'react-router-dom'

// Pages //
import EditOrder from '../pages/EditOrder'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NewOrder from '../pages/NewOrder'
import Orders from '../pages/Orders'

export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact render={() => (
                <Redirect to='/login' />
            )} />
            <Route path='/home' component={Home} />
            <Route component={Login} path='/login' exact />
            <Route component={NewOrder} path='/order/new' />
            <Route component={EditOrder} path='/orders' exact/>
            <Route component={Orders} path='/orders/all' exact/>
        </Switch>
    )
}