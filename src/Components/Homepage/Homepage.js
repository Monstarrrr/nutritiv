import React from 'react'
import { useSelector } from 'react-redux';
import styles from './Homepage.module.scss';

export const Welcome = () => {
  
  const loggedIn = useSelector(state => state.user.loggedIn)
  
  const pageAnimation = {
    exit: {
      opacity: 0,
      transition: {
        default: { duration: 0.4 },
      },
    },
  }
  
  return (
    <div 
      variants={pageAnimation} 
      exit="exit"
    >
      <br />
      <div>
        <div style={{border: "1px solid grey", backgroundColor: "white"}}>
          <p>
            <b>Important note(s):</b>
          </p>
          <div style={{color: "brown"}}>
            <span role="note" aria-label='note'>
              ⚠️
            </span> 
            This project is work in progress, but feel free to look around & create an account.
          </div>
          <br />
          <div style={{color: "green"}}>
            <span role="note" aria-label='checkmark'>
              ✔️ v1.0.1 - Patch
              <br />
              <ul>
                <li>
                  Fixed third party authentication link
                </li>
              </ul>
            </span>
            <br />
            <span role="note" aria-label='checkmark'>
              ✔️ v1.0.0 - Major release (no design included)
              <br/>
              <ul>
                <li>
                  Register / Login with email
                </li>
                <li>
                  Register / Login with third party websites
                </li>
                <li>
                  2FA Authentication
                </li>
                <li>
                  Edit profile information
                </li>
                <li>
                  Displaying & filtering products
                </li>
                <li>
                  Add to cart / Remove from cart
                </li>
                <li>
                  Buy products with stripe (using test credit card)
                </li>
                <li>
                  Real-time chat
                </li>
              </ul>
            </span>
          </div>
        </div>
        <h2 className={styles.title}>
          <span
            whilehover={{opacity: 0.5}}
          >
            Homepage
          </span>
        </h2>
      </div>
      {
        !loggedIn && (
          <div>
            You are not connected
          </div>
        )
      }
    </div>
  )
}