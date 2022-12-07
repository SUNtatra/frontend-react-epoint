import React from 'react'

const FormAddValidationcongelist = () => {
  return (
    <div>
        <h1 className='title'>Demande de Conge</h1>
        <h2 className='subtitle'>demande de conge</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <form>
                    
                <div className="field">
                        <label className="label">id demande conge</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='id demande conge'/>
                        </div>
                </div>

                <div className="field">
                        <label className="label">date debut dans le demande de conge</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='date debut dans le demande de conge'/>
                        </div>
                </div>

                <div className="field">
                        <label className="label">date fin dans le demande de conge</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='date fin dans le demande de conge'/>
                        </div>
                </div>

                <div className="field">
                        <label className="label">date debut du conge obtenu</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='date debut du conge obtenu'/>
                        </div>
                </div>

                <div className="field">
                        <label className="label">date fin du conge obtenu</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='date fin du conge obtenu'/>
                        </div>
                </div>

                <div className="field">
                        <div className="control">
                        <button className="button is-success">Send</button>
                        </div>
                </div>

                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddValidationcongelist