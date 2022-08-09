import s from './Test.module.css'
import { cnMerge } from 'utils/cn-merge'

function Test() {
  return <h1 className={cnMerge('font-bold text-green-500', s['something'])}>Test</h1>
}

export default Test
