import { DELETE_INJURED_ANIMAL, GET_USER_INJURED_ANIMAL, UPDATE_INJURED_ANIMAL } from "../type";


const initialData = {
    animals:[],
    success:true,
    message:""
};

export const userInjuredAnimalReducer = (state=initialData,action) =>{

    switch(action.type){
        case GET_USER_INJURED_ANIMAL : {
            // console.log(action.payload.allAnimal,"jj");
            if(action.payload.success===true){
                return{
                    ...state,
                    animals:action.payload.allAnimal,
                    success:action.payload.success,
                    message:action.payload.message
                }
            }
            else{
                return{
                    ...state,
                    success:action.payload.success,
                    message:action.payload.message
                }
            }
        }

        case DELETE_INJURED_ANIMAL: {
            if(action.payload.success===true){
                return{
                    ...state,
                    animals: state.animals?.filter(animal=>{return(animal._id !== action.payload.animal._id)}),
                    success:action.payload.success,
                    message:action.payload.message
                }
            }
            else{
                return{
                    ...state,
                    success:action.payload.success,
                    message:action.payload.message
                }
            }
        }

        case UPDATE_INJURED_ANIMAL: {
            if(action.payload.success===true){
                state = state.animals?.filter(animal=>{return(animal._id !== action.payload.animal._id)})
                return{
                    ...state,
                    animals:[action.payload.animal,...state.animals],
                    success:action.payload.success,
                    message:action.payload.message
                }
            }
            else{
                return{
                    ...state,
                    success:action.payload.success,
                    message:action.payload.message
                }
            }
        }
         default:return state
    }
}