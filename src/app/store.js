import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
// import movieReducer from "../features/movie/movieSlice";

export default configureStore({
    reducer: {//reducer is a function that dertermines changes in an applications's state...
        user: userReducer,
        // movie: movieReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});