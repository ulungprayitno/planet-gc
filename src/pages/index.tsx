import React, { lazy, Suspense } from 'react';
import Navbar from '../components/navbar'
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import('./home'));
const Detail = lazy(() => import('./detail'));
const WishList = lazy(() => import('./wishlist'));

const Pages: React.FC = () => {
  return (
    <>
    <Navbar />
    <Switch>
        <Suspense fallback="">
            <Route path='/' component={Home} exact></Route>
            <Route path='/detail/:id' component={Detail} exact></Route>
            <Route path='/wishlist' component={WishList} exact></Route>
        </Suspense>
    </Switch>
    </>
  );
}

export default Pages;
