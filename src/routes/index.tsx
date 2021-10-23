import { Switch, Route, Redirect } from 'react-router-dom'
import DetailsOrder from '../pages/DetailsOrder'

// Pages //
import EditOrder from '../pages/EditOrder'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NewOrder from '../pages/NewOrder'
import Orders from '../pages/Orders'
import SuccessMessage from '../pages/SuccessMessage'

export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact render={() => (
                <Redirect to='/login' />
            )} />
            <Route path='/home' component={Home} />
            <Route component={Login} path='/login' exact />
            <Route component={NewOrder} path='/order/new' />
            <Route component={Orders} path='/orders' exact/>
            <Route component={EditOrder} path='/orders/edit/:id' />
            <Route component={DetailsOrder} path='/orders/details/:id' />
            <Route component={SuccessMessage} path='/success'/>
        </Switch>
    )
}