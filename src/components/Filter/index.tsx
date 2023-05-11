import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material'
import {Context, useContext, useState} from 'react';
import styles from './index.module.scss';

export type FilterItems  = {
  value: string | number,
  label: string
}

export interface FilterProps {
  title: string,
  items: Array<FilterItems>,
  context: Context<any>
}

function Filter(props: FilterProps) {
  const {title='', items=[], context} = props
  const [val, setVal] = useState('all');
  const {applyFilter} = useContext(context)

  const handleChange = (event: SelectChangeEvent) => {
    setVal(event.target.value);
    console.log(event.target.value)
    applyFilter(event.target.value)
  };
  return (
    <>
      {items?.length > 0 && (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className={styles.filterWrapper}>
          <InputLabel id="select-label">{title}</InputLabel>
          <Select
            labelId="select-label"
            className={styles.select}
            value={val}
            onChange={handleChange}
            sx={{ mt: 2 , mb: 5, width: '100%'}}
            label={title}
          >
            <MenuItem className={styles.selectItem} value={'all'}>All</MenuItem>
            {items.map(item => (
                <MenuItem className={styles.selectItem} key={item?.value} value={item?.value}>{item?.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  )
}

export default Filter