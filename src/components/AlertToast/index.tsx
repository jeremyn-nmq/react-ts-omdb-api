import {Alert, Snackbar} from '@mui/material';
import {Context, SyntheticEvent, useContext} from 'react';

export interface AlertToastProps {
  context: Context<any>,
}
function AlertToast({ context } : AlertToastProps){
  const { alert, setAlert } = useContext(context);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert('')
  };
  return (
    <>
      <Snackbar open={alert?.length !== 0} anchorOrigin={{vertical:'top', horizontal:'right'}}
        autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {alert}
        </Alert>
      </Snackbar>
    </>
  )
}

export default AlertToast