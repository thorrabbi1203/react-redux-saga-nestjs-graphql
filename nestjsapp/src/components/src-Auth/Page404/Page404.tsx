import {
  Container,
  CssBaseline,
  makeStyles,
  Typography,
} from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error'
import React from 'react'

import ImgError from '../../assets/img/Error.png'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paperForNetworkError: {
    marginTop: theme.spacing(18),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  root: {
    flexGrow: 1,
  },
}))

function Page404({ errorBE, location }) {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {location && (
        <div className={classes.paper}>
          <img alt="errorImage" src={ImgError} />
          <Typography component="h1" variant="h2">
            <b>Sorry!!!</b>
          </Typography>
          <Typography variant="h5">
            <b>Page Not Found!</b>
          </Typography>
          <Typography variant="h5"></Typography>
        </div>
      )}
      {errorBE && (
        <div className={classes.paperForNetworkError}>
          <ErrorIcon style={{ fontSize: 60 }} />
          <b style={{ fontSize: 20 }}>
            Network error. Please check your connection and try again!
          </b>
        </div>
      )}
    </Container>
  )
}
export default Page404
