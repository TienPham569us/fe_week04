import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth-slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { authApi } from './features/authApi';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const userAppSelector: TypedUseSelectorHook<RootState> = useSelector;