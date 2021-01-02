import React from 'react'
import { CustomBtn } from './CustomBtnStyles'

const CustomButton = ({children, ...props}) => (
    <CustomBtn {...props}>
        {children}
    </CustomBtn>
)

export default CustomButton
