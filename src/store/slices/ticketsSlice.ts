import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ITicket } from "../../types";

export const fetchTickets = createAsyncThunk<ITicket[]>(
  "tickets/fetchTickets",
  async (): Promise<ITicket[]> => {
    try {
      const { data } = await axios.get<ITicket[]>(
        "https://efaa115836ca538c.mokky.dev/tickets"
      );

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState: [] as ITicket[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTickets.pending, () => {
      console.log("pending");
    });
    builder.addCase(
      fetchTickets.fulfilled,
      (state, action: PayloadAction<ITicket[]>) => {
        state.splice(0, state.length, ...action.payload);
      }
    );
    builder.addCase(fetchTickets.rejected, () => {
      console.log("rejected");
    });
  },
});

export default ticketsSlice.reducer;
