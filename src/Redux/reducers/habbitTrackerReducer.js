import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
    taskList : []
}

const habbitSlice = createSlice({
    name: 'habbits',
    initialState: INITIAL_STATE,
    reducers:{
        addToList:(state,action)=>{
            const task = action.payload;
            state.taskList.push(task);
        },
        updateHabbit:(state,action)=>{
            const  habbit = action.payload;
            // Find the index of the task to update
            const index = state.taskList.findIndex(task => task.taskName === habbit.taskName);
            if (index !== -1) {
                // Update the task at the found index
                state.taskList[index] = habbit;
            }
        },
        deleteHabbit:(state,action)=>{
            const habbit = action.payload;
            const index = state.taskList.findIndex(task => task.taskName === habbit.taskName);
            if (index !== -1){
              state.taskList.splice(index,1);
            }  
        }
    }

})
export const habbitReducer =  habbitSlice.reducer;
export const {addToList, updateHabbit, deleteHabbit} = habbitSlice.actions;