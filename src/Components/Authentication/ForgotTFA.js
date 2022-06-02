import React, { useState } from 'react'
import nutritivApi from '../../Api/nutritivApi';
import { QrCodeTFA } from './QrCodeTFA';

export const ForgotTFA = () => {
  const [RecoveryWords, setRecoveryWords] = useState("")
  const [recoverySuccessfull, setRecoverySuccessfull] = useState(false)
  const [qrCodeUrl, setQrCodeUrl] = useState("")
  const [qrCodeSecret, setQrCodeSecret] = useState("")
  
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const twoFaToken = localStorage.getItem('twofa_token');
    console.log('# twofa_token :', twoFaToken)
    try {
      const { data } = await nutritivApi.post(
        `/auth/TFARecovery`,
        { TFARecovery: RecoveryWords },
        { headers: {
            twofa_token: twoFaToken
        }}
      )
      if(data.qrCodeUrl && data.qrCodeSecret) {
        setRecoverySuccessfull(true)
        setQrCodeUrl(data.qrCodeUrl)
        setQrCodeSecret(data.qrCodeSecret)
      }
    } catch(err) {
      console.error('/auth/login:', err)
    }
  }
  
  const handleChange = (e) => {
    setRecoveryWords(e.target.value.split(" "))
  }
  
  console.log('# qrCodeUrl :', qrCodeUrl)
  console.log('# qrCodeSecret :', qrCodeSecret)

  return (
    <>
      {
        recoverySuccessfull ? (
          <>
            <h2>
              Get a new Google 2FA
            </h2>
            <QrCodeTFA 
              qrCodeUrl={qrCodeUrl}
              qrCodeSecret={qrCodeSecret}
              // setTFAStatus
            />
          </>
        ) : (
          <form onSubmit={handleForgotPassword}>
            <p>Enter your 12 recovery words separated with spaces:</p>
            <textarea
              name="recoveryWords" 
              onChange={handleChange}
              placeholder='Recovery words...' 
              type="text"
            />
            <br />
            <input value="Recover 2FA" type="submit"/>
          </form>
        )
      }
    </>
  )
}