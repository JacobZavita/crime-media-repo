import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}))

const MediaType = () => {
  const classes = useStyles()
  const [typeState, setTypeState] = useState({
    movie: false,
    tv: false,
    documentary: false,
    docuseries: false,
    podcast: false
  })

  const handleTypeChange = (event) => {
    setTypeState({ ...typeState, [event.target.name]: event.target.checked })
  };

  const { movie, tv, documentary, docuseries, podcast } = typeState

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Media Type</FormLabel>
          <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={movie} onChange={handleTypeChange} name="movie" />}
            label="Movie"
          />
          <FormControlLabel
            control={<Checkbox checked={tv} onChange={handleTypeChange} name="tv" />}
            label="TV"
          />
          <FormControlLabel
            control={<Checkbox checked={podcast} onChange={handleTypeChange} name="podcast" />}
            label="Podcast"
          />
          <FormControlLabel
            control={<Checkbox checked={docuseries} onChange={handleTypeChange} name="docuseries" />}
            label="Docuseries"
          />
          <FormControlLabel
            control={<Checkbox checked={documentary} onChange={handleTypeChange} name="documentary" />}
            label="Documentary"
          />
        </FormGroup>
      </FormControl>
    </div>
  )
}

export default MediaType
