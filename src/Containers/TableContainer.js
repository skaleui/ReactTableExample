import React, { useEffect, useState, useMemo } from 'react';
import { Container } from 'reactstrap';
import { DataTable } from '../Components/DataTable';

import 'bootstrap/dist/css/bootstrap.min.css';
import { SelectColumnFilter } from '../Utils/filters';
import { RenderRowSubComponent } from '../Components/subcomponent';


export const TableContainer = (props) => {

  const [data, setData] = useState([])

  useEffect(() => {
    const doFetch = async() => {
      const response = await fetch('https://randomuser.me/api/?results=100');
      const body = await response.json();
      const contacts = body.results;
      setData(contacts);
    };
    doFetch();

  }, [])

  const columns = useMemo(
    ()=> [
      {
        Header: () => null,
        id: 'expander',
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? '👇' : '👉'}
          </span>
        )
      },
      {
        Header: 'Title',
        accessor: 'name.title',
        disableSortedBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'First Name',
        accessor: 'name.first',
      },
      {
        Header: 'Last Name',
        accessor: 'name.last',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'City',
        accessor: 'location.city',
      },
      {
        Header: 'Hemisphere',
        accessor: (values)=> {
          const {latitude, longitude} = values.location.coordinates;
          const first = Number(latitude) > 0 ? 'N' : 'S';
          const second = Number(longitude) > 0 ? 'E' : 'W';
          return first + '/' + second;
        },
        disableSortedBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
        Cell: ({cell}) => {
          const {value} = cell;

          const pickEmoji = (value) => {
            let first = value[0]; // N or S
            let second = value[1]; // E or W
            const options = ['⇖', '⇗', '⇙', '⇘'];
            let num = first === 'N' ? 0 : 2;
            num = second === 'E' ? num + 1 : num;
            return options[num];
          };

          return (
            <div style={{ textAlign: 'center', fontSize: 18 }}>
              {pickEmoji(value)}
            </div>
          );
        },
      },    
    ], []
  );

  return (
    <Container style={{ marginTop: 110 }}>
      <DataTable
        columns={columns}
        data={data}
        renderRowSubComponent={RenderRowSubComponent}
      />
    </Container>
  );

}