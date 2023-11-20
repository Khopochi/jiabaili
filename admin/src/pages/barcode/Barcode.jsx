import React from 'react'
import './barcode.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarcode } from '@fortawesome/free-solid-svg-icons'

export const Barcode = () => {
  return (
    <div className='barcode'>
        <div className="container">
            <div className="upper">
                Scan Product
            </div>
            <div className="lower">
                <div className="icon">
                    <FontAwesomeIcon icon={faBarcode} />
                </div>
                <div className="code">
                    Not scanned
                </div>
            </div>
            <div className="footer">
                Place the item in proximity to the barcode scanner for scanning
            </div>
        </div>
    </div>
  )
}
