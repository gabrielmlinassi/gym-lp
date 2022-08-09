import type { NextPage } from 'next'
import Test from 'components/test'

const HomePage: NextPage = () => {
  return (
    <div className="bg-yellow-500 text-red-500">
      Home Page
      <Test />
    </div>
  )
}

export default HomePage
