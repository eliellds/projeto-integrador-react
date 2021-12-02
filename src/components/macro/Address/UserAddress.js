import React, { useState } from 'react'
import RadioButton from '../../micro/Forms/Radio/RadioButton'
import "./UserAddress.css"

function UserAddress(props) {
    const address = props.userAddress || []
    const [ads, setAds] = useState();

    const handleChange = e => {
        const target = e.target;
        if (target.checked) {
            props.function(target.value)
            setAds(target.value);
        }
    }

    function renderUserAddress() {

        return address.map(userAddress => {
            return <RadioButton
                className="col-lg-3 col-md-5 col-10 new-address "
                name="radioDefault"
                class="custom-cep-radio"
                inline
                value={userAddress.id.idAddress}
                checked={ads == userAddress.id.idAddress}
                onChange={handleChange}
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
    console.log(ads)

    return <div className="container">

        <div className="mb-3 mt-3 row d-flex justify-content-around">

            {renderUserAddress()}
            {props.children}
        </div>

    </div>


}
export default UserAddress