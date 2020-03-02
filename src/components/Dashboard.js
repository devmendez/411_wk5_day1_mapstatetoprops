import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'


const Dashboard = (props) => {
    return (
        <Container maxWidth="lg" className="car-container">
            {/* Change NAME to props.user.username */}
            <h4>Welcome, {props.user.username}</h4>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make/Model</TableCell>
                        <TableCell>MPG</TableCell>
                        <TableCell>Cylinders</TableCell>
                        <TableCell>Displacement</TableCell>
                        <TableCell>Horsepower</TableCell>
                        <TableCell>Weight</TableCell>
                        <TableCell>Acceleration</TableCell>
                        <TableCell>Year</TableCell>
                        <TableCell>Origin</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {/* Change cars to props.cars and remove the cars.json import above */}
                {props.cars.map(car => (
                    <TableRow key={car.id}>
                        <TableCell component="th" scope="row">
                            {car.id}
                        </TableCell>
                        <TableCell>{car["Name"]}</TableCell>
                        <TableCell>{car["Miles_per_Gallon"]}</TableCell>
                        <TableCell>{car["Cylinders"]}</TableCell>
                        <TableCell>{car["Displacement"]}</TableCell>
                        <TableCell>{car["Horsepower"]}</TableCell>
                        <TableCell>{car["Weight_in_lbs"]}</TableCell>
                        <TableCell>{car["Acceleration"]}</TableCell>
                        <TableCell>{car["Year"]}</TableCell>
                        <TableCell>{car["Origin"]}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Dashboard