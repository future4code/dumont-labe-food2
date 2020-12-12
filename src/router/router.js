import React from 'react';
import LoginPage from '../pages/RegistersAndLogin/LoginPage/index'
import SignUpPage from '../pages/RegistersAndLogin/SignUpPage/index'
import AdressRegisterPage from '../pages/RegistersAndLogin/AdressRegisterPage/index'
import FeedPage from '../pages/Home/FeedPage/index'
import RestaurantPage from '../pages/RestaurantPage/index'
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import ProfilePage from '../pages/Profile/ProfilePage';
import EditAdressPage from '../pages/Profile/EditAdressPage';
import EditSignUpPage from '../pages/Profile/EditSignUpPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <LoginPage />
                </Route>

                <Route exact path='/cadastro'>
                    <SignUpPage />
                </Route>

                <Route exact path='/cadastro/endereço'>
                    <AdressRegisterPage />
                </Route>

                <Route exact path='/feed'>
                    <FeedPage />
                </Route>

                <Route exact path='/restaurante'>
                    <RestaurantPage />
                </Route>

                <Route exact path='/carrinho'>
                    <CartPage/>
                </Route>

                <Route exact path='/perfil'>
                    <ProfilePage/>
                </Route>

                <Route exact path='/editar/endereço'>
                    <EditAdressPage />
                </Route>

                <Route exact path='/editar/cadastro'>
                    <EditSignUpPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router
