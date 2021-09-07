import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Grid, FormControl, TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  headerText: {
    align: 'center',
    margin: '75px auto 15px auto'
  },
  card: {
    maxWidth: 500,
    margin: '0 auto',
    padding: '20px 5px'
  }
}))

function SearchForm() {
  const classes = useStyles()

  return (
    <div>
      <Typography gutterBottom className={classes.headerText}>
        Find The Right Media For Your Class
      </Typography>
      <Card className={classes.card}>
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <FormControl>
                  <TextField
                    label='Search field'
                    type='search'
                    variant='outlined'
                  />
                  <TextField
                    label='Another field'
                    type='search'
                    variant='outlined'
                  />
                </FormControl>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default SearchForm
