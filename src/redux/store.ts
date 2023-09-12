import { configureStore } from '@reduxjs/toolkit';
import pitchApi from '~/pages/Admin/Pitch/api/pitch.api';

export const store = configureStore({
    reducer: {
        [pitchApi.reducerPath]: pitchApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([pitchApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
