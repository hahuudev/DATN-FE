import { createSlice } from "@reduxjs/toolkit";

const test = createSlice({
    name: "test",
    initialState: "hello",
    reducers: {},
});

export default test.reducer;