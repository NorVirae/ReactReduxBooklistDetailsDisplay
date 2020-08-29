import React from'react';
import { BOOK_DETAIL, BOOK_LIST, NOT_BOOKLIST } from '../constants';


export const bookDetail = (id)=>{
    return {
        type:BOOK_DETAIL,
        payload:id
    }
}

export const bookList = ()=>{
    return {
        type:BOOK_LIST
    }
}

export const notBookList = ()=>{
    return {
        type:NOT_BOOKLIST
    }
}