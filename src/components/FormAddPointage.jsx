import React from 'react'

const FormAddPointage = () => {
  return (
    <div>
        <h1 className='title'>Pointage</h1>
        <h2 className='subtitle'>se pointer</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <form>
                    
                <div className="field">
                        <label className="label">id pointage</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Numero'/>
                        </div>
                </div>

                <div className="field">
                        <label className="label">date</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Nom de l Unite'/>
                        </div>
                </div>

                <div className="field">
                        <label className="label">heure d entre</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Nom de l Unite'/>
                        </div>
                </div>

                <div className="field">
                        <label className="label">heure de sortie</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Nom de l Unite'/>
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

export default FormAddPointage