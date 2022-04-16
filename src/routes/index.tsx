import { api } from '../services/api'
// Hooks //
import { useEffect } from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
// PAGES //
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
import Users from '../pages/Dashboard/Users'

export default function Routes() {
    const { push } = useHistory()
    const { signOut, isSigned, setIsSigned } = useAuth()

    // Verifica se o usuário está autorizado; //
    // Senão estiver, o redireciona para a página de login //
    useEffect(() => {
        async function verifyAuthorization() {
            const dataJSON = localStorage.getItem('@my-orders')

            if (!dataJSON) return push('/login')

            const data = JSON.parse(dataJSON)
            api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

            await api.get('/')
                .then(_ => {
                    setIsSigned(true)
                })
                .catch(_ => {
                    signOut()
                })
        }

        verifyAuthorization()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSigned])

    // Se não estiver logado, redireciona para tela de login //
    !isSigned && <Redirect to={'/login'} push />

    return (
        <Switch>
            <Route component={Home} path='/' exact />

            {
                !isSigned && <Route component={Login} path='/login' exact />
            }
            <Route component={Orders} path='/orders' exact />
            <Route component={NewOrder} path='/order/new' exact />
            <Route component={EditOrder} path='/orders/edit/:id' exact />
            <Route component={DetailsOrder} path='/orders/details/:id' exact />

            <Route component={Dashboard} path='/dashboard' exact />
            <Route component={AdminOrders} path='/dashboard/pedidos' exact />
            <Route component={AdminFoods} path='/dashboard/pratos' exact />
            <Route component={Users} path='/dashboard/usuarios' exact />

            <Route path='*' component={isSigned ? Home : Login} />
        </Switch>
    )
}