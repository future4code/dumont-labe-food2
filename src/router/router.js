import React from 'react';
import SplashScreenPage from '../pages/RegistersAndLogin/SplashScreen'
import LoginPage from '../pages/RegistersAndLogin/LoginPage/index'
import SignUpPage from '../pages/RegistersAndLogin/SignUpPage/index'
import AdressRegisterPage from '../pages/RegistersAndLogin/AdressRegisterPage/index'
import FeedPage from '../pages/Home/FeedPage/index'
import SearchPlacehoder from '../pages/Home/SearchPlacehoderPage/index';
import RestaurantPage from '../pages/RestaurantPage/index'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import ProfilePage from '../pages/Profile/ProfilePage';
import EditAdressPage from '../pages/Profile/EditAdressPage';
import EditSignUpPage from '../pages/Profile/EditSignUpPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} >
                    <SplashScreenPage />
                </Route>
               
                <Route exact path='/login'>
                    <LoginPage />
                </Route>
               
                <Route exact path='/cadastro'>
                    <SignUpPage />
                </Route>
               
                <Route exact path='/endereço'>
                    <AdressRegisterPage />
                </Route>

                <Route exact path='/feed'>
                    <FeedPage />
                </Route>

                <Route exact path='/restaurante'>
                    <RestaurantPage />
                </Route>

                <Route exact path='/search'>
                    <SearchPlacehoder />
                </Route>

                <Route exact path='/carrinho'>
                    <CartPage />
                </Route>

                <Route exact path='/perfil'>
                    <ProfilePage />
                </Route>

                <Route exact path='/perfil/editar/endereço/:idUser'>
                    <EditAdressPage />
                </Route>

                <Route exact path='/perfil/editar/cadastro/:idUser'>
                    <EditSignUpPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router