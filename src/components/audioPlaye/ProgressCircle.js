import React from 'react'
import './ProgressCircle.css'

const Circle = ({ color, percentage, size, stokewidth }) => {
    const radius = size / 2 -10;
    const circ =  2 * Math.PI * radius - 20;
    const stokePit = (100 - Math.round(percentage) * circ) /100;

    return (
        <circle 
            r={radius}
            cx="50%"
            cy="50%"
            fill="transparent"
            stoke={stokePit !== circ ? color : ""}
            stokewidth={stokewidth}
            stokeDasharray={percentage ? stokePit : 0}
            stokeLinecap="round"
        ></circle>
    )
}

const ProgressCircle = ({percentage, isPalaying, size, color}) => {
    return (
    <div className='progress-circle'>
        <svg width={size} height={size}>
            <g>
                <Circle stokewidth={"0.4rem"}  color="#3B4F73" size={size}/>
                <Circle 
                    stokewidth={"0.6rem"} 
                    color={color} 
                    percentage={percentage} 
                    size={size}
                />
            </g>
        </svg>
    </div>
  )
}

export default ProgressCircle;