import { createSlice} from "@reduxjs/toolkit"
const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieResult:null,
        movieNames:null,
        loading:false,

    },
    reducers:{
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state,action) => {
            const {movieNames,movieResult} = action.payload;
            state.movieNames = movieNames;
            state.movieResult = movieResult;
        },
        toggleLoading:(state)=>{
            state.loading = !state.loading;
        },
    },
});

export const {toggleGptSearchView,addGptMovieResult,toggleLoading} = gptSlice.actions;
export default gptSlice.reducer;