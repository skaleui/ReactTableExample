import React from 'react';
import { Input, CustomInput } from 'reactstrap';

export const Filter = ({column}) => {
    return (
        <div style={{ marginTop:5 }}>
            {column.canFilter && column.render("Filter")}
        </div>
    )
};

export const DefaultColumnFilter = ({
    column: {
        filterValue,
        setFilter,
        preFilteredRows: { length },
    },
}) => {
    return (
        <Input
            value={filterValue || ''}
            onChange={ (e) => {
                setFilter(e.target.value || undefined);
            }}
            placeholder={`search (${length}) ...`}
        ></Input>
    );
};

export const SelectColumnFilter = ({
    column: { filterValue, setFilter, preFilteredRows, id},
}) => {
 const options = React.useMemo( ()=> {
     const options = new Set();
     preFilteredRows.forEach(row => {
         options.add(row.values[id]);
     });
     return [...options.values()]
 }, [id, preFilteredRows]);

 let kid = 0;
 const getID = () => {
    return kid++;
 }
 
 return (
     <CustomInput
        id={''+getID()}
        type='select'
        value={filterValue}
        style={{ height: 37, width: `-webkit-fill-available` }}
        onChange={ e => {
            setFilter(e.target.value || undefined);
        }}
     >
     <option value=''>All</option>
     {options.map( (option)=> (
         <option key={option} value={option}>
            {option}
         </option>
     ))

     }
     </CustomInput>
 )
 
}