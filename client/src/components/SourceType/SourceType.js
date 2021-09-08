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

const SourceType = () => {
  const classes = useStyles()

  const [sourceState, setSourceState] = useState({
    netflix: false,
    amazon: false,
    hbo: false,
    hulu: false,
    other: false
  })

  const handleSourceChange = (event) => {
    setSourceState({ ...sourceState, [event.target.name]: event.target.checked });
  };

  const { netflix, amazon, hbo, hulu, other } = sourceState;

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Streaming Source</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={netflix} onChange={handleSourceChange} name="netflix" />}
              label="Netflix"
            />
            <FormControlLabel
              control={<Checkbox checked={amazon} onChange={handleSourceChange} name="amazon" />}
              label="Amazon Prime"
            />
            <FormControlLabel
              control={<Checkbox checked={hbo} onChange={handleSourceChange} name="hbo" />}
              label="HBO Max"
            />
            <FormControlLabel
              control={<Checkbox checked={hulu} onChange={handleSourceChange} name="hulu" />}
              label="Hulu"
            />
            <FormControlLabel
              control={<Checkbox checked={other} onChange={handleSourceChange} name="other" />}
              label="Other"
            />
          </FormGroup>
      </FormControl>
    </div>
  )
}

export default SourceType
