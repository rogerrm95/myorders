import { Switch, Route, Redirect } from 'react-router-dom'
// Pages //
// Garçom //
import DetailsOrder from '../pages/MyOrders/DetailsOrder'
import EditOrder from '../pages/MyOrders/EditOrder'
import Home from '../pages/MyOrders/Home'
import Login from '../pages/MyOrders/Login'
import NewOrder from '../pages/MyOrders/NewOrder'
import Orders from '../pages/MyOrders/Orders'
import SuccessMessage from '../pages/MyOrders/SuccessMessage'
// Cozinha //
import Dashboard from '../pages/Dashboard/Home'

export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact render={() => (
                <Redirect to='/login' />
            )} />
            <Route path='/home' component={Home} />
            <Route component={Login} path='/login' />
            <Route component={NewOrder} path='/order/new' />
            <Route component={Orders} path='/orders' exact />
            <Route component={EditOrder} path='/orders/edit/:id' />
            <Route component={DetailsOrder} path='/orders/details/:id' />
            <Route component={SuccessMessage} path='/success' />

            <Route component={Dashboard} path='/admin/home' />
        </Switch>
    )
}