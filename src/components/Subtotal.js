import React from 'react'
import '../styles/subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";


function Subtotal() {
    //console.log('subtotal.js', useStateValue()[0])
    const [{basket, subtotal}] = useStateValue();
    console.log('sub.js', subtotal)

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={value => (
                    <>
                    <p>
                        {/* Part of the homework */}
                Subtotal ({basket?.length} items): <strong>{subtotal.toFixed(2)}</strong>
                    </p>

                    <small className="subtotal__gift">
                        <input type="checkbox" name="" id=""/>  
                          &nbsp;&nbsp;This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={102  } //part of homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />

            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
