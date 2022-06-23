import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
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
import { createBlacklistFilter } from "redux-persist-transform-filter";
import AsyncStorage from "@react-native-async-storage/async-storage";

/** ================================================ */
/** State Interface */
interface AppState {
  themeMode: string;
  isSideMenuOpen: boolean;
  bottomReached: boolean;
}

/** Initiliaze the state */
const initialState: AppState = {
  themeMode: "dark",
  isSideMenuOpen: false,
  bottomReached: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.themeMode = state.themeMode === "dark" ? "light" : "dark";
    },
    toggleSideMenu: (state) => {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    },
    setBottomReached: (state, { payload }) => {
      state.bottomReached = payload;
    },
  },
});

export const { toggleMode, toggleSideMenu, setBottomReached } =
  appSlice.actions;
/** ================================================ */

/** ================================================ */
const dummySlice = createSlice({
  name: "dummy",
  initialState: {
    yesNoAnswer: "Yes",
  },
  reducers: {
    toggleYesNo: (state) => {
      state.yesNoAnswer = state.yesNoAnswer === "Yes" ? "No" : "Yes";
    },
  },
});

export const { toggleYesNo } = dummySlice.actions;
/** ================================================ */
const saveSubsetBlacklistFilter = createBlacklistFilter("app", [
  "isSideMenuOpen",
  "bottomReached",
]);

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  transforms: [saveSubsetBlacklistFilter],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ app: appSlice.reducer, dummy: dummySlice.reducer })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
