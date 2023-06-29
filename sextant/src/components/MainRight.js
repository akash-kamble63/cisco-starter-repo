import React from 'react'
import IPAddressDisplay from './IPAddressDisplay'

function MainRight() {
  return (
    <div className='topCard'>
        <div className='topCard-name'>
            <h2>IP Addresses</h2>
            <h2></h2>
        </div>
        <div className="address">
            <div className='ipf'>
                <IPAddressDisplay addressType="ipv4" />
            </div>
            <div className='ips'>
                <IPAddressDisplay addressType="ipv6" />
            </div>
        </div>
    </div>
  )
}

export default MainRight