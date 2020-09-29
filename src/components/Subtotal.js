import React from "react";
import "../styles/subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getSutbtotal } from "../utils/reducer";

function Subtotal() {
  //console.log('subtotal.js', useStateValue()[0])
  const [{ basket }] = useStateValue();
  console.log("sub.js");

  return (
    <div className="subtotal">
      {/* ---------------- MORE EFFICIENT VERSION ---------------- */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket?.length} items):{" "}
              <strong>{value}</strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" name="" id="" />
              &nbsp;&nbsp;This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getSutbtotal(basket)} //part of homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
      {/* ---------------- MY VERSION ---------------- */}
      {/* `<CurrencyFormat 
                renderText={value => (
                    <>
                    <p>
                        
                Subtotal ({basket?.length} items): <strong>{subtotal.toFixed(2)}</strong>
                    </p>

                    <small className="subtotal__gift">
                        <input type="checkbox" name="" id=""/>  
                          &nbsp;&nbsp;This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={102} //part of homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />` */}

      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
