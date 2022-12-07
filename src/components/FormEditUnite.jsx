import React from 'react'

const FormEditUnite = () => {
  return (
    <div>
              <h1 className='title'>Unite</h1>
        <h2 className='subtitle'>Update Unite</h2>
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
                        <label className="label">Nom de l Unite</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Nom de l Unite'/>
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

export default FormEditUnite