import React from "react"
import Lupa from "../../../../assets/images/headers/lupa.png"

function FormSearch(props) {
    return (
        <>
            <form action="/search">
                <div className="container">
                    <div className="row">
                        <div className="pesquisa-btn mx-0 col-11">
                            <input type="text" className="pesquisa" placeholder="O que deseja colecionar?" />
                        </div>
                        <div className="pesquisa-btn mx-0 col-1">
                            <button className="button-submit" type="submit">
                                <img className="lupa"
                                    src={Lupa} />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            
        </>
    )

}

export default FormSearch
