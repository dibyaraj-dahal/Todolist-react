import React, { useState } from "react";

function MyArrayObject() {

    const [car, setCar] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel,
        };

        setCar([...car, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(i) {
        setCar(car.filter((_, index) => i !== index));
    }

    function handleCarYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleCarMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleCarModelChange(event) {
        setCarModel(event.target.value);
    }

    return (
        <div>
            <h1>My Array Object</h1>

            <ul>
                {car.map((c, index) => (
                    <li
                        key={index}
                        onClick={() => handleRemoveCar(index)}
                    >
                        {c.year} {c.make} {c.model}
                    </li>
                ))}
            </ul>

            <input
                type="number"
                value={carYear}
                onChange={handleCarYearChange}
            />
            <br />

            <input
                type="text"
                value={carMake}
                onChange={handleCarMakeChange}
            />
            <br />

            <input
                type="text"
                value={carModel}
                onChange={handleCarModelChange}
            />
            <br />

            <button onClick={handleAddCar}>
                Add Car
            </button>
        </div>
    );
}

export default MyArrayObject;