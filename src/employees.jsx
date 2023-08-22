import { useState } from 'react';
import './App.css';

const Employees =  () => {

    const [employees, setEmployees] = useState([{
        id: 1,
        fullName: "Andres Galindo",
        designation: "FullStack",
        gender: "male",
        teamName: "Guerreros"
    },
    { 
        id: 2,
        fullName: "Julian Niño",
        designation: "FullStack",
        gender: "male",
        teamName: "Guerreros|"
    },
    { 
        id: 3,
        fullName: "linda Carreño",
        designation: "SQL",
        gender: "female",
        teamName: "Guerreros||"
    },
    { 
        id: 4,
        fullName: "Edwin Ospina",
        designation: "Front End",
        gender: "male",
        teamName: "Guerreros"
    },
    { 
        id: 5,
        fullName: "Laura Oviedo",
        designation: "Back End",
        gender: "female",
        teamName: "Guerreros"
    },
    { 
        id: 6,
        fullName: "Mariana Bermudez",
        designation: "FullStack",
        gender: "female",
        teamName: "Guerreros|"
    },
    { 
        id: 7,
        fullName: "John Martinez",
        designation: "SQL",
        gender: "male",
        teamName: "Guerreros||"
 
    
    }]);

    return (
        <main>
            <table>
                <thead>
                    <tr>
                        <td><h3> Name</h3></td>
                        <td><h3> Role</h3></td>
                        <td><h3> Gender</h3></td>
                        <td><h3> Group</h3></td>
                    </tr>
                </thead>
            </table>
        
        {
            employees.map((employee) => (
                <table>
                    <tbody>
                        <tr>
                            <th><p>{employee.fullName}</p></th>
                            <th><p>{employee.designation}</p></th>
                            <th><p>{employee.gender}</p></th>
                            <th><p>{employee.teamName}</p></th>
                        </tr>
                    </tbody>
                </table>
            ))
        }
        </main>

    ) 
    
}

export default Employees