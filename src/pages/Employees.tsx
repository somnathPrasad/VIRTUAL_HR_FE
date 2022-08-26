import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PageContainer from "../components/stylesComponents/PageContainer";
import useGetAllEmployees from "../features/employee/api/getAllEmployees";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

interface Employee {
    firstName: string,
    lastName: string,
    companyId: string,
    aadharNumber?: string,
    panNumber?: string,
    mobileNumber?: string,
    userId: string,
    roles: object,
    _id: string,
    address?: string
}

function Row(props: { row: Employee }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} hover>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                        disabled
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.firstName}
                </TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.aadharNumber}</TableCell>
                <TableCell align="center">{row.panNumber}</TableCell>
                <TableCell align="center">{row.mobileNumber}</TableCell>
                <TableCell align="center">{row.address}</TableCell>
            </TableRow>
            {/* <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow> */}
        </React.Fragment>
    );
}

export default function Employees() {

    const axiosPrivate = useAxiosPrivate();

    const { data, isLoading } = useGetAllEmployees(axiosPrivate);

    return (
        <PageContainer>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>First Name</TableCell>
                        <TableCell align="center">Last Name</TableCell>
                        <TableCell align="center">Aadhar Number</TableCell>
                        <TableCell align="center">Pan Number</TableCell>
                        <TableCell align="center">Mobile Number</TableCell>
                        <TableCell align="center">Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!isLoading && data.map((row: Employee) => (
                        <Row key={row._id} row={row} />
                    ))}
                </TableBody>
            </Table>
        </PageContainer>
    )
}