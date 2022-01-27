// Hooks //
import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { api } from '../services/api'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
// Pages //
// Garçom //
import DetailsOrder from '../pages/MyOrders/DetailsOrder'
import EditOrder from '../pages/MyOrders/EditOrder'
import Home from '../pages/MyOrders/Home'
import Login from '../pages/MyOrders/Login'
import NewOrder from '../pages/MyOrders/NewOrder'
import Orders from '../pages/MyOrders/Orders'
// Cozinha //
import Dashboard from '../pages/Dashboard/Home'
import AdminOrders from '../pages/Dashboard/Orders'
import AdminFoods from '../pages/Dashboard/Foods'
import { useOrders } from '../hooks/useOrders'

export default function Routes() {
    const { push } = useHistory()

    const [isLogged, setIsLogged] = useState(false)
    const { getOrders } = useOrders()

    useEffect(() => {
        async function verifyAuthorization() {
            const dataJSON = localStorage.getItem('@my-orders')

            if (!dataJSON) return push('/login')

            const data = JSON.parse(dataJSON)
            api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

            await api.get('/')
                .then(_ => {
                    getOrders()
                    setIsLogged(true)
                })
                .catch(_ => {
                    setIsLogged(false)
                    push('/login')
                })
        }

        verifyAuthorization()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogged])

    !isLogged && <Redirect to={'/login'} push />

    return (
        <Switch>
            <Route component={Home} path='/' exact />
            <Route component={Login} path='/login' exact />
            <Route component={Orders} path='/orders' exact />
            <Route component={NewOrder} path='/order/new' exact />
            <Route component={EditOrder} path='/orders/edit/:id' exact />
            <Route component={DetailsOrder} path='/orders/details/:id' exact />

            <Route component={Dashboard} path='/admin/home' exact />
            <Route component={AdminOrders} path='/admin/pedidos' exact />
            <Route component={AdminFoods} path='/admin/pratos' exact />

        </Switch>
    )
}