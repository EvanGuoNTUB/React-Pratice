
import { DataGrid } from '@mui/x-data-grid';
import style from './style.module.scss';

export function Twd() {
  const rows = [{
    id: 1,
    username: 'Kevin',
    gender:'male',
    age: 20,
    height: 170,
    weight: 60,
    nationality:'USA'
  },{
    id: 2,
    username: 'Alice',
    gender:'female',
    age: 18,
    height: 170,
    weight: 50,
    nationality:'Japan'
  },{
    id: 3,
    username: 'Leo',
    gender:'male',
    age: 16,
    height: 160,
    weight: 50,
    nationality:'UK'
  },{
    id: 4,
    username: 'Emily',
    gender:'female',
    age: 22,
    height: 160,
    weight: 45,
    nationality:'Korea'
  },{
    id: 5,
    username: 'John',
    gender:'male',
    age: 19,
    height: 180,
    weight: 70,
    nationality:'Canada'
  }];
  const columns=[
    { field: 'id' },
    { field: 'username' },
    { field: 'gender' },
    { field: 'age' },
    { field: 'height' },
    { field: 'weight' },
    { field: 'nationality' }
  ]
    return (
          <div className={style.data_grid}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            />
          </div>
    );
}