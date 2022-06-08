import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface IMockup {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const fetchFleets = createAsyncThunk<IMockup>(
  "fleet/fetchFleets",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return (await response.json()) as IMockup;
  }
);

interface IFleet {
  fleetID: number;
  fleetDecs: string;
}

interface IFleets {
  loading: boolean;
  fleets: Array<IFleet>;
  test: IMockup | null;
  error: string | null;
}

const initialState: IFleets = {
  loading: false,
  fleets: [],
  test: null,
  error: null,
};

const fleetSlice = createSlice({
  name: "fleet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFleets.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchFleets.fulfilled, (state, action) => {
      state.test = action.payload;
      state.loading = false;
    });
  },
});

export default fleetSlice.reducer;
// export const { added } = fleetSlice.actions;
