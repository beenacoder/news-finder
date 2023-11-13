import { Container, Grid, Typography } from '@mui/material';
import NewsForm from './components/NewsForm';
import NewsList from './components/NewsList';
import { NewsProvider } from './context/NewsProvider';

function App() {


    return (
        <NewsProvider>
            <Container>
                <header>
                    <Typography align='center' marginY={5} variant='h3' component='h1'>
                        Buscador de noticias
                    </Typography>
                </header>

                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Grid item xs={12} md={6} lg={4}>
                        <NewsForm />
                    </Grid>
                </Grid>
                <NewsList />
            </Container>
        </NewsProvider>

    )
}

export default App
