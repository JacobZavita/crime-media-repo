import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, Input } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 400,
  },
}))

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 350,
    },
  },
};

const CLSTopics = () => {
    const classes = useStyles()

    const topics = [
    'Cults',
    'Death Penalty',
    'Deviance',
    'Domestic Violence',
    'Hate Crime',
    'Illegal Drugs',
    'Immigration',
    'Incarceration',
    'Juvenile Delinquency',
    'Kidnapping',
    'Mental Illness',
    'Policing',
    'Sexual Assault',
    'Serial Killers',
    'Terrorism',
    'Weapons',
    'White Collar Crimes',
    'Wrongful Conviction',
  ]

  const [topic, setTopic] = useState([])

  const handleTopicChange = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setTopic(value);
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">CLS Topics</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={topic}
          onChange={handleTopicChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {topics.map((topic) => (
            <MenuItem key={topic} value={topic}>
              <Checkbox checked={topic.indexOf(topic) > -1} />
              <ListItemText primary={topic} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default CLSTopics
