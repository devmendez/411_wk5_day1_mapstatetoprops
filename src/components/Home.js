import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'

const cars = []

const Home = (props) => {
    return (
        <div className="card-container">
            {/* Change cars to props.cars and remove the cars.json import above */}
            {props.cars.map((car, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{car.Name.toUpperCase()}</span>
                        <ul>
                        <li>Miles_per_Gallon: {car["Miles_per_Gallon"]}</li>
                        <li>Cylinders: {car["Cylinders"]}</li>
                        <li>Displacement: {car["Displacement"]}</li>
                        <li>Horsepower: {car["Horsepower"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/car/${car.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home