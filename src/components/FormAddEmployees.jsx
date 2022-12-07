import React from 'react'

const FormAddEmployees = () => {
  return (
    <div>
        <h1 className='title'>Employees</h1>
        <h2 className='subtitle'>Ajouter un nouveaux Employees</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <form>

                <div className="field">
                        <label className="label">matricule</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='matricule'/>
                        </div>
                </div>                    
                <div className="field">
                        <label className="label">Nom</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Name'/>
                        </div>
                </div>

                <div className="field">
                        <label className="label">Prenom</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Prenom'/>
                        </div>
                </div>

                <div className="field">
                        <label className="label">Date de naissance</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Date de naissance'/>
                        </div>
                </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Email'/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Sexe</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select>
                                    <option value="admin">male</option>
                                    <option value="employees">femelle</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Adresse</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Adresse'/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Telephone</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Telephone'/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Photo</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Photo'/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Role</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select>
                                    <option value="admin">Admin</option>
                                    <option value="employees">Employees</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input type="password" className="input" placeholder='******'/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Confirm Password</label>
                        <div className="control">
                            <input type="password" className="input" placeholder='******'/>
                        </div>
                    </div>
                                        
                    <div className="field">
                        <div className="control">
                        <button className="button is-success">Save</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddEmployees