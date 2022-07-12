import React, {useState} from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';

import user from '../../images/user.png';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice';
const Header = () => {
    const [term,setTerm] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        if (term == '') return alert('Please enter the search term');
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm('');
    }
    return (
        <div className='header'>
           <div className='logo'><Link to="/">Brand Name</Link></div>
           <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder="search for movies or shows" onChange={(e)=> setTerm(e.target.value)} />
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
           </div>
           <div className='user-image'>
                <img src={user} />
            </div>
           
        </div>
    );
};

export default Header;