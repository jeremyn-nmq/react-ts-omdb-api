import {CircularProgress} from '@mui/material';

function Loading(){
  return (
    <>
      <p>Please wait...</p>
      <CircularProgress sx={{ color: '#fff', my: 3 }}/>
    </>
  )
}

export default Loading