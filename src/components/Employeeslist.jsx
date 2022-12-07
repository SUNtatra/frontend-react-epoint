import React from 'react'

const Employeeslist = () => {
  return (
    <div>
        <h1 className='title'>Employees</h1>
        <h2 className='subtitle'>Listes des Employees</h2>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>Matricule</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Date de naissance</th>
                    <th>Email</th>
                    <th>Sexe</th>
                    <th>Adresse</th>
                    <th>Telephone</th>
                    <th>Photo</th>
                    <th>fonction na role</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Employeeslist