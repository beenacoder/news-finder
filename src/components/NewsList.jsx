import { Grid, Typography, Pagination, Stack } from '@mui/material';
import useNews from '../hooks/useNews';
import NewsItem from './NewsItem';

const NewsList = () => {
    const { news, newsQuantity, handlePages, page } = useNews();
    const totalPages = Math.ceil(newsQuantity / 20);
    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant='h3'
                component={'h2'}
            >
                Últimas Noticias
            </Typography>

            <Grid container spacing={2}>
                {news.map(singleNew => (
                    <NewsItem
                        key={singleNew.url}
                        singleNew={singleNew}
                    />    
                ))}
            </Grid>

            <Stack 
                spacing={2}
                direction= 'row'
                justifyContent='center'
                alignItems= 'center'
                sx={{marginY: 5}}
            >
                <Pagination 
                    count={totalPages} 
                    color="secondary" 
                    onChange={handlePages}
                    page={page}
                />   
            </Stack>
        </>
    )
}

export default NewsList