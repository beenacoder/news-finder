import {useState, useEffect, createContext} from 'react';
import axios from 'axios';

const NewsContext = createContext();

const NewsProvider = ({children}) => {
    const [category, setCategory] = useState('general');
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [newsQuantity, setNewsQuantity] = useState(0);




//Effect para el filtrado de categorias
    useEffect(() => {
        const getAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
            const {data} = await axios(url);
            setNews(data.articles)
            setNewsQuantity(data.totalResults);
            setPage(1);//cambia la categoria y regresa a la primera pagina
        }
        getAPI();
    }, [category])

//Effect para la paginación
useEffect(() => {
    const getAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        const {data} = await axios(url);
        setNews(data.articles)
        setNewsQuantity(data.totalResults);
    }
    getAPI();
}, [page])


    const handleCategory = (e) => {
        setCategory(e.target.value);
    }
    const handlePages = (e, val) => {
        setPage(val);
    }

    return (
        <NewsContext.Provider value={{category, handleCategory, news, newsQuantity, handlePages, page}}>
            {children}
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext;