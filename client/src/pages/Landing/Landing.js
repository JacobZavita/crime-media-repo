import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import SearchForm from '../../components/SearchForm'

const useStyles = makeStyles(theme => ({
  headerText: {
    align: 'center',
    margin: '75px auto 15px auto'
  },
}))

function Landing() {
  const classes = useStyles()
  
  return (
    <>
      <Typography
        gutterBottom
        variant='h4'
        className={classes.headerText}
      >
        Landing Page
      </Typography>
      <SearchForm />
    </>
  )
}

export default Landing
