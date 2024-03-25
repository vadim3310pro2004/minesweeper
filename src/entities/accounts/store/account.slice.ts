
import { fetchUserData } from "..";
import createAppSlice from "shared/utils/createAppSlice";


export type ColorScheme = 'dark' | 'light';

export interface AccountsState {
    user: {
        name?: string;
        email?: string;
        id?: number;
        error?: any;
    };
    colorScheme?: ColorScheme;
}


const initialState = {
    user: {
    },
};


const slice = createAppSlice({
    name: 'accounts',
    initialState: initialState satisfies AccountsState as AccountsState,
    reducers: (create) => ({
        unAuthotizate: create.reducer(() => {
            return initialState;
        }),
        
        setTheme: create.reducer<ColorScheme>((state, { payload }) => {
            state.colorScheme = payload;
        }),

        fetchUser: create.asyncThunk(
            async () => {
                return (await fetchUserData()).data
            },
            {
                fulfilled: (state, { payload }) => {
                    state.user = {
                        ...state.user,
                        ...payload,
                        error: null,
                    };
                },
                rejected: (state, { error }) => {
                    state.user = {
                        error
                    };
                },
            }
        ),

    }),
});


export const accountsReducer = slice.reducer;
export const { 
    unAuthotizate, 
    setTheme,
    fetchUser,
} = slice.actions;