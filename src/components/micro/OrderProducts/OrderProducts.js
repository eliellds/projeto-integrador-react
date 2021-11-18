import React, { useEffect, useState } from "react";

export default function OrderProducts(props) {

    function renderItems() {

        return props.options.map(
            function(item) {
                return (
                    <>
                        <li className="col-7 meu-pedido-item item-pedido-box mb-3">{item.product}</li>
                    </>
                )
            }
        )
    }

    return (
        <>
            {renderItems()}
        </>
    )

}