import { BOOK_LIST, BOOK_DETAIL, SIGNED_IN, NOT_BOOKLIST } from "../constants";
import {bookses} from '../data/datas';

const titleszy = bookses.map((eachBook)=>{
    return eachBook.title
})
const bookObject = {
    state:false,
    payload:null
}
export const bookListReducer = (state=false,action)=>{
    switch(action.type){
        case BOOK_LIST:
            console.log(titleszy)
            return  {...state, state:true,payload:titleszy}
        case NOT_BOOKLIST:
            return {state:false, payload:titleszy}
        default:
            return state
    }
}
export const bookDetailReducer = (state = false, action)=>{
    switch(action.type){
        case BOOK_DETAIL:
            let name = null
            let author = null
            let date = null
            let details = bookses.map((detailses)=>{if (action.payload+1 == detailses._id){
                
                date = detailses.date;
                author = detailses.author;
            } })
            console.log(name+" "+date+" "+author)
            return {states:true,date:date, author:author}
        
            
        default:
            return state

    }
}

export const signInReducer = (state=false, action)=>{
    switch(action.type){
        case SIGNED_IN:
            return !state
        default:
            return state
    }
}