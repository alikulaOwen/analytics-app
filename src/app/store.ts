import { configureStore, ThunkAction, Action, combineReducers, } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import salesReducer from '../features/analytics/saleSummarySlice'
import ordersReducer from '../features/orderAnalytics/ordersSummarySlice'
import storage from 'redux-persist/lib/storage';
import { 
  persistReducer, persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
    auth: authReducer,
    sales: salesReducer,
    orders: ordersReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },}
  ),

})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store)

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
