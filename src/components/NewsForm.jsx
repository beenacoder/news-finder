import { InputLabel, Select, FormControl, MenuItem } from '@mui/material';
import useNews from '../hooks/useNews';

const CATEGORIES = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
];

const NewsForm = () => {
    const { category, handleCategory} = useNews();

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Categorías</InputLabel>
                <Select 
                    label="Categorías"
                    onChange={handleCategory}
                    value={category}
                >
                    {CATEGORIES.map(cat => (
                        <MenuItem key={cat.label} value={cat.value}>
                            {cat.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </form>
    )
}

export default NewsForm