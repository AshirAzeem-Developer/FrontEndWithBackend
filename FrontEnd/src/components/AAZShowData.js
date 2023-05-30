import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AAZIconButton from "./AAZIconButton";
import { Delete, Edit } from "@mui/icons-material";
import { Del } from '../config/apibasemethods'

const StyledTableCell = styled( TableCell )( ( { theme } ) => ( {
  [ `&.${ tableCellClasses.head }` ]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [ `&.${ tableCellClasses.body }` ]: {
    fontSize: 14,
  },
} ) );

const StyledTableRow = styled( TableRow )( ( { theme } ) => ( {
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
} ) );

export default function AAZShowData( props ) {
  const { keys, dataSource } = props;

  const deleteStudent = ( id ) => {
    Del( 'student', id ).then( ( res ) => {
      console.log( res )
    } ).catch( ( err ) => { console.log( err ) } )
  }
  return (
    <TableContainer component={ Paper }>
      <Table sx={ { minWidth: 700 } } aria-label="customized table">
        <TableHead>
          <TableRow >
            { keys.map( ( x, i ) => {
              return <StyledTableCell key={ i } className=" fs-5 p-3 "> { x.displayName }</StyledTableCell>;
            } ) }
          </TableRow>
        </TableHead>
        <TableBody>
          { dataSource.map( ( row, i ) => (
            <StyledTableRow key={ i }>
              <StyledTableCell component="th" scope="row">{ row.firstName }</StyledTableCell>
              <StyledTableCell align="start">{ row.lastName }</StyledTableCell>
              <StyledTableCell align="start">{ row.contact }</StyledTableCell>
              <StyledTableCell align="start">{ row.email }</StyledTableCell>
              <StyledTableCell align="start">
                <div className="d-flex align-items-center justify-content-center">
                  <div>
                    <AAZIconButton iconComponent={ <Edit /> } color="success" />
                  </div>
                  <div>
                    <AAZIconButton iconComponent={ <Delete /> } color="error" onClick={ () => deleteStudent( row._id ) } />
                  </div>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ) ) }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
