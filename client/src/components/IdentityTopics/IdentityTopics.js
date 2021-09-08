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

const topics = [
  'Age',
  'Class',
  'Disability',
  'Gender',
  'Race & ethnicity',
  'Religion',
  'Sexual Orientation',
]

const IdentityTopics = () => {
  const classes = useStyles()
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
        <InputLabel id="demo-mutiple-checkbox-label">Identity Topics</InputLabel>
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

export default IdentityTopics
