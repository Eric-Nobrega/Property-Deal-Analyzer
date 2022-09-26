import './App.css';
import React, { useState } from 'react';

function App() {

  // Option State
  const [option, setOption] = useState(0);

  // BTL Parameters State
  const [btlParams, setBtlParams] = useState({
    purchasePrise: 0,
    stampDuty: 0,
    solicitorCost: 0,
    brokerFee: 0,
    epc: 0,
    gas: 0,
    insurance: 0,
    deposit: 0,
    mortgageRate: 0,
    mortgagePayment: 0,
    rent: 0,
    cashflow: 0,
  });

  // Handle Option Logic
  function HandleOption(x) {
    setOption(x);
  }

  // Handle BTL Result Logic
  function CalculateGrossYield() {
    // Calculate Gross Yield
    // Gross Yield is the Return On The Initial Investment Before Expenses
    // Such As Insurance, Tax, Maintenance

    // ((Monthly Rental Income * 12) / Property Value) * 100

    return ((btlParams.rent * 12) / btlParams.purchasePrise) * 100;
  }

  function CalculateNetYield() {
    const annualExpenses = parseInt(btlParams.epc) + parseInt(btlParams.gas) + parseInt(btlParams.insurance) + (parseInt(btlParams.mortgagePayment * 12));
    console.log(annualExpenses)
    return parseFloat((((btlParams.rent * 12) - annualExpenses) / btlParams.purchasePrise) * 100).toFixed(2);
  }

  function CalculateROI() {
    return parseFloat(((btlParams.rent * 12) / btlParams.deposit + btlParams.brokerFee + btlParams.stampDuty + btlParams.solicitorCost) * 100).toFixed(2);
  }

  function HandleOptionDisplay() {
    if (option == 1) {
      return (
        <div className='w-50 container my-3'>
          <h1 className="lead">Purchase Costs</h1>
          <p className="text-start my-1">Purchase Price</p>
          <input type="text" aria-label="First name" className="form-control" onInput={e => {
            setBtlParams({
              purchasePrise: e.target.value,
              stampDuty: btlParams.stampDuty,
              solicitorCost: btlParams.solicitorCost,
              brokerFee: btlParams.brokerFee,
              epc: btlParams.epc,
              gas: btlParams.gas,
              insurance: btlParams.insurance,
              deposit: btlParams.deposit,
              mortgageRate: btlParams.mortgageRate,
              mortgagePayment: btlParams.mortgagePayment,
              rent: btlParams.rent,
              cashflow: btlParams.cashflow,
            })
          }} />

          <p className="text-start my-1">Stamp Duty</p>
          <input type="text" aria-label="First name" className="form-control" onInput={e => {
            setBtlParams({
              purchasePrise: btlParams.purchasePrise,
              stampDuty: e.target.value,
              solicitorCost: btlParams.solicitorCost,
              brokerFee: btlParams.brokerFee,
              epc: btlParams.epc,
              gas: btlParams.gas,
              insurance: btlParams.insurance,
              deposit: btlParams.deposit,
              mortgageRate: btlParams.mortgageRate,
              mortgagePayment: btlParams.mortgagePayment,
              rent: btlParams.rent,
              cashflow: btlParams.cashflow,
            })
          }} />
          <p className="text-start my-1">Solicitor Cost</p>
          <input type="text" aria-label="First name" className="form-control" onInput={e => {
            setBtlParams({
              purchasePrise: btlParams.purchasePrise,
              stampDuty: btlParams.stampDuty,
              solicitorCost: e.target.value,
              brokerFee: btlParams.brokerFee,
              epc: btlParams.epc,
              gas: btlParams.gas,
              insurance: btlParams.insurance,
              deposit: btlParams.deposit,
              mortgageRate: btlParams.mortgageRate,
              mortgagePayment: btlParams.mortgagePayment,
              rent: btlParams.rent,
              cashflow: btlParams.cashflow,
            })
          }} />
          <p className="text-start my-1">Broker/Survey Fees</p>
          <input type="text" aria-label="First name" className="form-control" onInput={e => {
            setBtlParams({
              purchasePrise: btlParams.purchasePrise,
              stampDuty: btlParams.stampDuty,
              solicitorCost: btlParams.solicitorCost,
              brokerFee: e.target.value,
              epc: btlParams.epc,
              gas: btlParams.gas,
              insurance: btlParams.insurance,
              deposit: btlParams.deposit,
              mortgageRate: btlParams.mortgageRate,
              mortgagePayment: btlParams.mortgagePayment,
              rent: btlParams.rent,
              cashflow: btlParams.cashflow,
            })
          }} />

          <h1 className="lead mt-3">Landlord Costs</h1>
          <p className="text-start my-1">EPC</p>
          <input type="text" aria-label="First name" className="form-control" onInput={e => {
            setBtlParams({
              purchasePrise: btlParams.purchasePrise,
              stampDuty: btlParams.stampDuty,
              solicitorCost: btlParams.solicitorCost,
              brokerFee: btlParams.brokerFee,
              epc: e.target.value,
              gas: btlParams.gas,
              insurance: btlParams.insurance,
              deposit: btlParams.deposit,
              mortgageRate: btlParams.mortgageRate,
              mortgagePayment: btlParams.mortgagePayment,
              rent: btlParams.rent,
              cashflow: btlParams.cashflow,
            })
          }} />
          <p className="text-start my-1">Gas Safety Per Annum</p>
          <input type="text" aria-label="First name" className="form-control" onInput={e => {
            setBtlParams({
              purchasePrise: btlParams.purchasePrise,
              stampDuty: btlParams.stampDuty,
              solicitorCost: btlParams.solicitorCost,
              brokerFee: btlParams.brokerFee,
              epc: btlParams.epc,
              gas: e.target.value,
              insurance: btlParams.insurance,
              deposit: btlParams.deposit,
              mortgageRate: btlParams.mortgageRate,
              mortgagePayment: btlParams.mortgagePayment,
              rent: btlParams.rent,
              cashflow: btlParams.cashflow,
            })
          }} />
          <p className="text-start my-1">Insurance Per Annum</p>
          <input type="text" aria-label="First name" className="form-control" onInput={e => {
            setBtlParams({
              purchasePrise: btlParams.purchasePrise,
              stampDuty: btlParams.stampDuty,
              solicitorCost: btlParams.solicitorCost,
              brokerFee: btlParams.brokerFee,
              epc: btlParams.epc,
              gas: btlParams.gas,
              insurance: e.target.value,
              deposit: btlParams.deposit,
              mortgageRate: btlParams.mortgageRate,
              mortgagePayment: btlParams.mortgagePayment,
              rent: btlParams.rent,
              cashflow: btlParams.cashflow,
            })
          }} />

          <h1 className="lead mt-3">Mortgage</h1>
          <p className="text-start my-1">Deposit</p>
          <input type="text" aria-label="First name" className="form-control" onInput={e => {
            setBtlParams({
              purchasePrise: btlParams.purchasePrise,
              stampDuty: btlParams.stampDuty,
              solicitorCost: btlParams.solicitorCost,
              brokerFee: btlParams.brokerFee,
              epc: btlParams.epc,
              gas: btlParams.gas,
              insurance: btlParams.insurance,
              deposit: e.target.value,
              mortgageRate: btlParams.mortgageRate,
              mortgagePayment: btlParams.mortgagePayment,
              rent: btlParams.rent,
              cashflow: btlParams.cashflow,
            })
          }} />
          <p className="text-start my-1">Mortgage Interest Rate</p>
          <input type="text" aria-label="First name" className="form-control" onInput={e => {
            setBtlParams({
              purchasePrise: btlParams.purchasePrise,
              stampDuty: btlParams.stampDuty,
              solicitorCost: btlParams.solicitorCost,
              brokerFee: btlParams.brokerFee,
              epc: btlParams.epc,
              gas: btlParams.gas,
              insurance: btlParams.insurance,
              deposit: btlParams.deposit,
              mortgageRate: e.target.value,
              mortgagePayment: btlParams.mortgagePayment,
              rent: btlParams.rent,
              cashflow: btlParams.cashflow,
            })
          }} />
          <p className="text-start my-1">Mortgage Payments</p>
          <input type="text" aria-label="First name" className="form-control" onInput={e => {
            setBtlParams({
              purchasePrise: btlParams.purchasePrise,
              stampDuty: btlParams.stampDuty,
              solicitorCost: btlParams.solicitorCost,
              brokerFee: btlParams.brokerFee,
              epc: btlParams.epc,
              gas: btlParams.gas,
              insurance: btlParams.insurance,
              deposit: btlParams.deposit,
              mortgageRate: btlParams.mortgageRate,
              mortgagePayment: e.target.value,
              rent: btlParams.rent,
              cashflow: btlParams.cashflow,
            })
          }} />
          <p className="text-start my-1">Rent</p>
          <input type="text" aria-label="First name" className="form-control" onInput={e => {
            setBtlParams({
              purchasePrise: btlParams.purchasePrise,
              stampDuty: btlParams.stampDuty,
              solicitorCost: btlParams.solicitorCost,
              brokerFee: btlParams.brokerFee,
              epc: btlParams.epc,
              gas: btlParams.gas,
              insurance: btlParams.insurance,
              deposit: btlParams.deposit,
              mortgageRate: btlParams.mortgageRate,
              mortgagePayment: btlParams.mortgagePayment,
              rent: e.target.value,
              cashflow: btlParams.cashflow,
            })
          }} />
          <p className="text-start my-1">Cashflow</p>
          <input type="text" aria-label="First name" className="form-control" onInput={e => {
            setBtlParams({
              purchasePrise: btlParams.purchasePrise,
              stampDuty: btlParams.stampDuty,
              solicitorCost: btlParams.solicitorCost,
              brokerFee: btlParams.brokerFee,
              epc: btlParams.epc,
              gas: btlParams.gas,
              insurance: btlParams.insurance,
              deposit: btlParams.deposit,
              mortgageRate: btlParams.mortgageRate,
              mortgagePayment: btlParams.mortgagePayment,
              rent: btlParams.rent,
              cashflow: e.target.value,
            })
          }} />

          <button type="button" className="btn btn-primary my-4">Calculate</button>

          <p className="text-start my-1 lead">Gross Yield: <span>{CalculateGrossYield()}%</span></p>
          <p className="text-start my-1 lead">Net Yield: <span>{CalculateNetYield()}%</span></p>
          <p className="text-start my-1 lead">ROI: <span>{CalculateROI()}%</span></p>
        </div>
      )
    } else if (option == 2) {
      return (
        <h1>2</h1>
      )
    }
  }

  return (
    <div className="App p-3">
      <h1 className='display-6'>Property Deal Analyzer</h1>
      <h1 className='lead'>Select Deal Type</h1>
      <div className="OptionButtons">
        <button type="button" className="btn btn-primary btn-lg w-25" onClick={() => { HandleOption(1) }} >BTL</button>
        <button type="button" className="btn btn-primary btn-lg mx-2 w-25" onClick={() => { HandleOption(2) }} >BRRR</button>
      </div>
      {HandleOptionDisplay()}
    </div>
  );
}

export default App;
