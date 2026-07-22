import StatisticLine from './StatisticLine'

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  
  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  const average = (good * 1 + neutral * 0 + bad * -1) / total
  const positivePercentage = (good / total) * 100

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average.toFixed(2)} />
          <StatisticLine text="positive" value={`${positivePercentage.toFixed(2)} %`} />
        </tbody>
      </table>
    </div>
  )
}

export default Statistics
