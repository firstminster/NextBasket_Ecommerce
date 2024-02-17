import {
    Action,
    combineReducers,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productReducer } from './features/product';
import productSlice from './features/productSlice';
import { cartReducer } from './features/cart';
import { wishReducer } from './features/wishlist';


const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    wishList: wishReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store: any = configureStore({
    reducer: persistedReducer
    ,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

// create types for state and dispatch
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;


