import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes';
import {SHOP_ROUTE} from '../util/consts';
import {Context} from '../index';

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <div>
            <Routes>
                {user.isAuth && authRoutes.map(({path, element}) =>
                    <Route key={'1'} path={path} element={element} exact/>
                )}
                {publicRoutes.map(({path, element}) =>
                    <Route key={'2'} path={path} element={element} exact/>
                )}
                <Route path="*" element={<Navigate replace to={SHOP_ROUTE} />} />
            </Routes>
        </div>
    );
};

export default AppRouter;
