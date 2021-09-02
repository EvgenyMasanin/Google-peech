import React from 'react'
import StatisticTable from '../Components/StatisticTable/StatisticTable'
import { useTypedSelector } from '../Redux/store'

const Statistic = () => {
  const {
    statistic: { games, isLoading },
  } = useTypedSelector((state) => ({
    statistic: state.statistic,
  }))

  return <StatisticTable words={games} isLoading={isLoading} />
}

export default Statistic
