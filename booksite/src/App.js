import React from 'react';

import { useDispatch, useSelector } from 'react-redux';


import {Link, BrowserRouter, Route} from 'react-router-dom';
import productPage from './pages/ProductPage'
import homePage from './pages/HomePage';
import aboutPage from './pages/AboutPage';
import contactPage from './pages/ContactPage';
import { BOOK_LIST } from './redux/constants';
import { bookList, bookDetail, notBookList } from './redux/actions';

const App = ()=>{
    const dispatch = useDispatch();
    const {state, payload} = useSelector(state=>state.books);
    const {states, author, date} =useSelector(state=>state.details)
    console.log(payload)
    const joe = {name:"jit", date:"12/34/2012"}
    
    return (
        <BrowserRouter>
        
        <div className={'container-fluid'}>
        <nav className= {'navbar navbar-expand-sm navbar-dark bg-dark'}>
            <div className = {'container-fluid'}>
                <Link to="/" className={'nav-brand mr-5'}>BookSite</Link>
                <button className={'navbar-toggler'}>
                    <span className={'navbar-toggler-icon'} 
                    data-target={'#NavBarNav'}></span></button>
                    <div className={'collapse navbar-collapse'} id={'NavBarNav'}>
                        <ul className={'navbar-nav'}>
                            <li className={'nav-item  mx-1'}>
                                <Link to="/" className={'nav-link'}>
                                Home
                                </Link>
                            </li>
                            <li className={'nav-item  mx-1'}>
                            <Link to="/contacts" className={'nav-link'}>
                                Contact
                                </Link>
                            </li>
                            <li className={'nav-item  mx-1'}>
                            <Link to="/about" className={'nav-link'}>
                                About
                                </Link>
                                
                            </li>
                            <li className={'nav-item  mx-1'}>
                            <Link to="/products" className={'nav-link'}>
                                About
                                </Link>
                                
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-6'}>
                <Route path="/" exact={true} component={homePage}/>
                <Route path="/products" exact={true} component={productPage}/>
                <Route path="/about" exact={true} component={aboutPage}/>
                <Route path="/contacts" exact={true} component={contactPage}/>
                {state?<button className={'btn btn-outline-success'} onClick={()=>dispatch(notBookList())}>Close Book</button>:
                <button className={'btn btn-outline-success'} onClick={()=>dispatch(bookList())}>View Books</button>}
                <ul className={'list-group'}>
                {state?
                    payload ?
                    payload.map((el, index)=>{
                        return <li onClick={()=>dispatch(bookDetail(index))} className={'list-group-item'}
                        key={ index }
                        >{el}</li>
                    }) : null
                :null}

                </ul>
                
                </div>
                <div className={'col-6'}>
                <ul className={'list-group'}>
                    <li className={'list-group-item'}>Authors: {author}</li>
                    <li className={'list-group-item'}>Date: {date}</li>
                </ul>
                
                   
                </div>
            </div>
        </div>
        </div>
        </BrowserRouter>
    )
}

export default App;