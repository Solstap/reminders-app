// import { useState } from 'react'
import './App.css'

// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Countdown from './Components/Countdown';

function createData(name, birthday){
  return { name, birthday };
}

const rows = [
  createData('Roxana Mihaila', '1993-06-28'),

];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Birthdays</TableCell>
            <TableCell align="right">Countdown</TableCell> 
            <TableCell align="right">Add Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.birthday}</TableCell>
              <TableCell align="right">
                <Countdown targetDate={row.birthday} />
              </TableCell>
              <TableCell align="right">Add Age</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

