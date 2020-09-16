import React from 'react'
import '../styles/subtotal.css'
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={value => (
                    <>
                    <p>
                        {/* Part of the homework */}
                        Subtotal (0 items): <strong>0</strong>
                    </p>

                    <small className="subtotal__gift">
                        <input type="checkbox" name="" id=""/>  
                          &nbsp;&nbsp;This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={0} //part of homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />

            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
