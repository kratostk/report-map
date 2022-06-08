import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

const fetchFleets = createAsyncThunk(
    "fleet/fetchFleets",
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const resuot = await response.json()
        console.log(resuot)
    }
)
interface IFleet {
    fleetID: number;
    fleetDecs: string;
}

interface IFleets {
    loading: boolean;
    fleet: Array<IFleet>
    error: string | null
}

const initialState: IFleets = {
    loading: false,
    fleet: [],
    error: null
};

const fleetSlice = createSlice({
    name: "fleet",
    initialState,
    reducers: {
        // added: (state: IFleets, action: PayloadAction<IFleets>) => {
        //     state = action.payload
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFleets.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchFleets.fulfilled, (state: IFleets, action) => {
            state.fleet = [...state.fleet,action.payload]
            state.loading = true
        })
    }
});

export default fleetSlice.reducer;
// export const { added } = fleetSlice.actions;
