// import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Grid, TextField, Typography, Divider, Button } from '@material-ui/core'

import MediaType from '../MediaType'
import SourceType from '../SourceType'
import CLSTopics from '../CLSTopics'
import IdentityTopics from '../IdentityTopics'
import DatePicker from '../DatePicker'

const useStyles = makeStyles(theme => ({
  headerText: {
    align: 'center',
    margin: '75px auto 15px auto'
  },
  card: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '20px 5px'
  },
  formRow: {
    margin: '20px auto'
  }
}))

function SearchForm() {
  const classes = useStyles()

  return (
    <div>
      <Grid spacing={3}>
        <Grid item xs={12}>
          <Typography
            gutterBottom 
            variant='h5'
            className={classes.headerText}
          >
            Find The Right Media For Your Class
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <form>
                <Grid
                  container
                  spacing={1}
                  className={classes.formRow}
                >
                  <Grid
                    xs={12}
                    sm={6}
                    item
                  >
                    <TextField
                      label='Keyword Search'
                      placeholder='Making of a Murderer'
                      type='search'
                      variant='outlined'
                      fullWidth
                    />
                  </Grid>
                  <Grid
                    xs={12}
                    sm={3}
                    item
                  >
                    <CLSTopics />
                  </Grid>
                  <Grid
                    xs={12}
                    sm={3}
                    item
                  >
                    <IdentityTopics />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid
                    xs={12}
                    sm={6}
                    item
                  >
                    <MediaType />
                  </Grid>
                  <Grid
                    xs={12}
                    sm={6}
                    item
                  >
                    <SourceType />
                  </Grid>
                  {/* <Grid
                    xs={12}
                    sm={6}
                    item
                  >
                    <DatePicker />
                  </Grid> */}
                </Grid>
                <Divider />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Search
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default SearchForm
