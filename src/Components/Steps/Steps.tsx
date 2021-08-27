import React from 'react'

import { Steps as StepsAntd } from 'antd'

const { Step } = StepsAntd

const steps = [
  { title: 'level 1' },
  { title: 'level 2' },
  { title: 'level 3' },
  { title: 'level 4' },
  { title: 'level 5' },
  { title: 'level 6' },
]

interface ISteps {
  current: number
  onChange: (current: number) => void
}

const Steps: React.FC<ISteps> = ({ current, onChange }: ISteps) => {
  return (
    <div className="steps-container">
      <StepsAntd current={current} onChange={onChange}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </StepsAntd>
    </div>
  )
}

export default Steps
