import React from 'react'

const FormEditJourferie = () => {
  return (
    <div>
        <h1 className='title'>Jourferie</h1>
        <h2 className='subtitle'>Update Jourferie</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <form>
                    
                <div className="field">
                        <label className="label">Numero</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Numero'/>
                        </div>
                </div>

                <div className="field">
                        <label className="label">Nom de l evenement</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Nom de l evenement'/>
                        </div>
                </div>

                <div className="field">
                        <label className="label">Date</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Date'/>
                        </div>
                </div>

                <div className="field">
                        <div className="control">
                        <button className="button is-success">Update</button>
                        </div>
                </div>

                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormEditJourferie