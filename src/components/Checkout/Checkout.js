import React from 'react';

import { formatCurrency } from '../../helpers/currencyHelper';
import './Checkout.css'

const checkout = props => {

  let cart = props.cart.map(cartItem => {
    return <p key={cartItem.id}><a href="#">{cartItem.name}</a>&nbsp;x&nbsp;{cartItem.quantity}<span className="price">{formatCurrency(cartItem.price)}</span></p>
  })
  return(
    <div className="custom-row">
      <div className="col-75">
        <div className="custom-container">
          <form>
            <div className="custom-row">
              <div className="col-50">
                <div className="billing-container">
                  <h3>Billing Address</h3>
                  <label htmlFor="first-name"><i className="fa fa-user">&nbsp;Full Name</i></label>
                  <input type="text" name="firstname" placeholder="Your Name" />
                  <label htmlFor="email"><i className="fa fa-envelope">&nbsp;Email</i></label>
                  <input type="text" name="email" placeholder="@youremail" />
                  <label htmlFor="address"><i className="fa fa-address-card-o">&nbsp;Address</i></label>
                  <input type="text" name="address" placeholder="Your Address" />
                  <label htmlFor="city"><i className="fa fa-institution">&nbsp;City</i></label>
                  <input type="text" name="city" placeholder="Your city" />

                  <div className="custom-row">
                    <div className="col-50">
                      <div className="extra">
                        <label htmlFor="state">State</label>
                        <input type="text" name="state" placeholder="Your State" />
                      </div>
                    </div>
                    <div className="col-50">
                      <label htmlFor="zip">Zip Code</label>
                      <input type="text" name="zip" placeholder="Zip Code" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-50">
                <div className="payment-container">
                  <h3>Payment</h3>
                  <label htmlFor="cards">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa icon" style={{color: "navy"}}></i>
                    <i className="fa fa-cc-amex icon" style={{color: "blue"}}></i>
                    <i className="fa fa-cc-mastercard icon" style={{color: "red"}}></i>
                    <i className="fa fa-cc-discover icon" style={{color: "orange"}}></i>
                  </div>
                  <label htmlFor="cardname">Name on card</label>
                  <input type="text" name="cardname" placeholder="Name on Card" />
                  <label htmlFor="cardnumber">Credit card number</label>
                  <input type="text" name="cardnumber" placeholder="111-111-111-001" />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input type="text" name="expmonth" placeholder="October" />

                  <div class="custom-row">
                    <div class="col-50">
                      <div className="extra">
                        <label htmlFor="expyear">Exp Year</label>
                        <input type="text" name="expyear" placeholder="2018" />
                      </div>
                    </div>
                    <div class="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input type="text"  name="cvv" placeholder="352" />
                    </div>
                  </div>
                </div>
              </div> 

            </div>
            <label>
              <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
            </label>
            <input onClick={props.clearCart} type="submit" value="Continue to checkout" className="custom-btn" />
          
          </form>
        </div>
      </div>

      <div className="col-25">
        <div className="cart-container">
          <div className="custom-container">
            <h4>Cart 
              <span className="price" style={{color: "black"}}>
                <i className="fa fa-shopping-cart" style={{marginRight: 4}} ></i> 
                <b>{props.cart.length}</b>
              </span>
            </h4>
            
            {cart}
            <hr />
            <p>Total <span className="price" style={{color: "black"}}><b>{formatCurrency(props.total)}</b></span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default checkout;