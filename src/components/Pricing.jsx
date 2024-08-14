import React from 'react'
import '../css/Pricing.css'
export default function Pricing() {
    return (
        <div>
            <div className="card" id='card-custom'>

                <div className="card-body">
                    <br />
                    <h3 style={{ color: '#8290d1' }}><strong>API Pricing</strong></h3>
                    <p style={{ color: '#e2e8f0' }}>Our API pricing is based on the model used and the number of tokens processed.
                        Here's a breakdown of the costs:</p>
                    <table className="table table-dark mt-4" style={{ borderRadius: '7px', overflow: 'hidden'}}>
                        <thead className='table-dark'>
                            <tr style={{border:'1px solid #e2e8f0'}}>
                                <th style={{ backgroundColor: 'rgb(99, 17, 240)' }}>API</th>
                                <th style={{ backgroundColor: 'rgb(99, 17, 240)' }}>Model</th>
                                <th style={{ backgroundColor: 'rgb(99, 17, 240)' }}>Price per 1K Tokens</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{border:'0.5px solid #e2e8f0'}}>
                                <td style={{backgroundColor:'rgb(31, 46, 60)'}}>OpenAI</td>
                                <td style={{backgroundColor:'rgb(31, 46, 60)'}}>GPT-3.5</td>
                                <td style={{backgroundColor:'rgb(31, 46, 60)'}}>$0.002</td>
                            </tr>
                            <tr style={{border:'0.5px solid #e2e8f0'}}>
                                <td style={{backgroundColor:'rgb(31, 46, 60)'}}>OpenAI</td>
                                <td style={{backgroundColor:'rgb(31, 46, 60)'}}>GPT-4</td>
                                <td style={{backgroundColor:'rgb(31, 46, 60)'}}>$0.03</td>
                            </tr>
                            <tr style={{border:'0.5px solid #e2e8f0'}}>
                                <td style={{backgroundColor:'rgb(31, 46, 60)'}}>Together AI</td>
                                <td style={{backgroundColor:'rgb(31, 46, 60)'}}>Llama-2-70b</td>
                                <td style={{backgroundColor:'rgb(31, 46, 60)'}}>$0.0008</td>
                            </tr>
                            <tr style={{border:'0.5px solid #e2e8f0'}}>
                                <td style={{backgroundColor:'rgb(31, 46, 60)'}}>Together AI</td>
                                <td style={{backgroundColor:'rgb(31, 46, 60)'}}>Llama-2-13b</td>
                                <td style={{backgroundColor:'rgb(31, 46, 60)'}}>$0.0006</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4 style={{ color: '#8290d1' }}><strong>Token Estimation</strong></h4>
                    <p style={{ color: '#e2e8f0' }}>On average, 1 token is approximately 4 characters or 0.75 words.
                        For precise pricing, we recommend using our token calculator tool.</p>
                    <h4 style={{ color: '#8290d1' }}><strong>Billing</strong></h4>
                    <p style={{ color: '#e2e8f0' }}>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly.
                        Detailed usage reports are available in your account dashboard.</p>
                </div>
            </div>

        </div>
    )
}
