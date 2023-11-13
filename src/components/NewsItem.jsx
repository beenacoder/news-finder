import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from '@mui/material'

const NewsItem = ({ singleNew }) => {

    const { urlToImage, url, title, description, source } = singleNew;

    return (
        <Grid item md={6} lg={3}>
            <Card>
                
                    <CardMedia
                        component='img'
                        alt={`Imagen de ${title}`}
                        image = {urlToImage}
                        height={'250'}
                    />
                    <CardContent>
                        <Typography variant='body1' color='error'>
                            {source.name}
                        </Typography>
                        <Typography variant='h5' component='div'>
                            {title}
                        </Typography>
                        <Typography variant='body2'>
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link
                            href={url}
                            target='_blank'
                            variant = 'button'
                            color = 'secondary'
                            width = '100%'
                            textAlign='center'
                            sx={{textDecoration: 'none'}}
                        >
                            Leer Noticia
                        </Link>
                    </CardActions>
            </Card>

        </Grid>
    )
}

export default NewsItem