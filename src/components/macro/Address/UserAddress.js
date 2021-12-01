import React, { useState } from 'react'
import RadioButton from '../../micro/Forms/Radio/RadioButton'
import "./UserAddress.css"

function UserAddress(props) {
    const address = props.userAddress || []

    function renderUserAddress() {

        return address.map(userAddress => {
            console.log(userAddress)
         
            return <RadioButton 
                className="col-lg-3 col-md-5 col-10 new-address "
                class="custom-cep-radio"
                name="radioDefault"
                inline
                id={userAddress.id.idAddress}
                for={userAddress.id.idAddress}
                label={userAddress.description}
                street={userAddress.address.street + ", "}
                number={userAddress.address.number + " - "}
                complement={userAddress.address.complement}
                district={userAddress.address.district + ",  "}
                city={userAddress.address.city + " - "}
                state={userAddress.address.state}
                cep={userAddress.address.cep}
                reference={"Referência: " + userAddress.address.reference}

            />
        })
    }

    return <div className="container">

        <div className="mb-3 mt-3 row d-flex justify-content-around">

            {renderUserAddress()}

        </div>

    </div>


}
export default UserAddress