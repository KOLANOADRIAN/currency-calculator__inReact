import React, { useState } from "react";
import "./style.css";


const Form = () => {
  return (
    <form className="container__form Js--container__form">
       <fieldset className="container__formField">
          <legend className="form__legend">EXCHANGE</legend>
                    <p className="form__caption">WYMAGANE *</p>
                    <label className="form__label">
                        <span className="form__labelCaption">Wprowadz kwotę w PLN*:</span>
                    </label>
                    <label className="form__inputLabel"> Kwota
                        <input className="Js--form__labelInput" value="100" required type=" number" step="any" name="PLN"
                            minlength="2"/>
                    </label>
                   
                    
                    <label className="form__label">
                        <span className="form__labelCaption">CHCĘ OTRZYMAĆ*:</span>
                        <select className="label__selectFinish Js--label__selectFinish">
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </label>
                    
                    <button className="form__button">Przelicz
                    </button>
                    <button type="reset" className="reset form__button">Wyczyść
                    </button>
                    
                    <p>
                        <span className="form__result js-result">

                        </span>
                    </p>
            </fieldset>
    </form>

  )
};


export default Form;