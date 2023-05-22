import {Grid, Pagination} from '@mui/material';
import {ChangeEvent, useState} from 'react';
import {ENumberOfItems} from '../../utils/enums';
import styles from './index.module.scss';


export interface IGridWithPaginationProps{
  items: Array<React.ReactNode>,
  rowSpacing: any,
  columnSpacing: any,
  numberOfItems: ENumberOfItems,
  pagination?: boolean
}
const gridWithPaginationDefaultProps: IGridWithPaginationProps = {
  items: [],
  rowSpacing:6,
  columnSpacing:{ xs: 2, sm: 3, md: 4 },
  numberOfItems: ENumberOfItems.three,
  pagination: false,
}
function GridWithPagination({items, rowSpacing, columnSpacing, numberOfItems,pagination}:IGridWithPaginationProps){
  const [page, setPage] = useState(1);
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return(
    <>
      {pagination &&
        //todo: fix pagination styling and implements pagination function
        <Pagination
          count={10}
          className={styles.pagination}
          size="large"
          page={page}
          shape="rounded"
          onChange={handleChange}
          sx={{ my: 5 , width: '100%', justifyContent:'center'}}
        />}
      <Grid container rowSpacing={rowSpacing} columnSpacing={columnSpacing}>
        {items?.map((item, index) => {
          return (
            <Grid item xs={12} md={numberOfItems} key={index}>
              {item}
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}
GridWithPagination.defaultProps = gridWithPaginationDefaultProps;
export default GridWithPagination