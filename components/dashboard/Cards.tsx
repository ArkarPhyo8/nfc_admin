import React from 'react'
import DashboardUserNumber from './UserNumber'
import DashboardCardNumber from './CardNumber'

const DashboardCards = () => {
  return (
    <div className='grid grid-cols-2 gap-20'>
        <DashboardUserNumber/>
        <DashboardCardNumber/>
    </div>
  )
}

export default DashboardCards