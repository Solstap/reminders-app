import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'


// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddEventForm from './Components/forms/AddPerson';
import AddIcon from '@mui/icons-material/Add';

import Countdown from './Components/Countdown';
import Age from './Components/Age';


//list of birthdays
let birthdayList = [
  { name: "Alice", birthday: "1990-01-12" },
  { name: "Bob", birthday: "1988-05-23" },
  { name: "Charlie", birthday: "1992-07-15" },
  { name: "Diana", birthday: "1985-03-30" },
  { name: "Ethan", birthday: "1991-11-08" },
]


export default function App() {
  const [formIsVisible, setFormIsVisible] = useState(false)
  const [birthdays, setBirthdays] = useState(birthdayList);


  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Birthdays</TableCell>
            <TableCell align="right">Countdown</TableCell> 
            <TableCell align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {birthdays.map((row) => (
            <TableRow
              key={nanoid()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.birthday}</TableCell>
              <TableCell align="right">
                <Countdown targetDate={row.birthday} />
              </TableCell>
              <TableCell align="right">
                <Age targetDate={row.birthday} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {!formIsVisible && <Fab aria-label='add event' color='primary' onClick={() => setFormIsVisible(!formIsVisible)} sx={{ position:'fixed', right:50, bottom:50, zIndex:1000}} variant='extended'>
    <AddIcon sx={{ mr: 1 }}/>
    Add Event
    </Fab>}
    {formIsVisible && <AddEventForm setFormIsVisible={setFormIsVisible} formIsVisible={formIsVisible} birthdays={birthdays} setBirthdays={setBirthdays} />}
    </>

  );
}

