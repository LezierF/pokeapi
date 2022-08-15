import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { api } from '../../services/api';
import { ColorsTypes } from '../../helpers/typesList';

export default function ComboBox() {


    const [options, setOption] = React.useState<any[]>([])

    api.get(`/pokemons?perPage=10000&offset=0`).then(({data}) => {
        let list = [] as any;
        data.results.forEach( (key: any) => {
          list.push(key.name);
        });
        setOption(list)
    })

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ width: 300, border: 'none', padding: 0 }}
            onChange={(event, newToChange) => {
                window.location.href = `/${newToChange}`
            }}
            renderInput={(params) => <TextField {...params} label={"Pesquise um pokémon"} />}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
