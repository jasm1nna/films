import './header.css'
import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink, useNavigate, } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import CartBlock from '../cart-block/cart-block'
import { useDispatch } from 'react-redux'
import { setCurrentFilm } from '../../redux/cart/film/film'

export default function Header({ data }) {

    const [show, setShow] = useState(false)
    const [viewSearch, setViewSearch] = useState(false)
    const [search, setSearch] = useState('')
    const toggileClass = show ? 'resp_nav' : ''
    const toggleSearch = viewSearch ? 'view-search' : ''

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = (film) => {
        navigate(`/film/${film.title}`)
        dispatch(setCurrentFilm(film))
        setSearch('')
    }

    return (
        <header className='header'>
            <button className='burder-btn' onClick={() => setShow(!show)}><FaBars /></button>
            <div className='wrapper'>
                <NavLink to="/" className='store-title'>Онлайн фильмы</NavLink>
            </div>
            <div className={`nav-menu ${toggileClass}`}>
                <ul>
                    <li><NavLink className='navLink' to='/'>Главная</NavLink></li>
                    <li><NavLink className='navLink' to='/search'>Поиск по жанрам</NavLink></li>
                    <li><NavLink className='navLink' to='/about'>Контакты</NavLink></li>
                </ul>
                <button className='burder-btn close-btn' onClick={() => setShow(!show)}>
                    <FaTimes size={20} />
                </button>
            </div>
            <div className='card-btn-wrapper'>
                <div className='search-block'>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} className={`input-search ${toggleSearch}`} type='search' placeholder='Введите запрос' />

                    {
                        search && <div className='input-values'>
                            {
                                data.filter(item => {
                                    if (search !== '') {
                                        return item.title.toLowerCase().includes(search.toLowerCase())
                                    }
                                }).map(film => {
                                    return search && (
                                        <div className='search-result' onClick={() => handleClick(film)}>
                                            <div>
                                                <img width={100} src={film.image} alt="" />
                                            </div>
                                            <div className='search-content'>
                                                <div className='search-title'>{film.title}</div>
                                                <div className='search-title'>{film.genres}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                     }
                </div>
                <FiSearch className='search-btn' size={20} />
                <CartBlock />
            </div>
        </header>
    )
}