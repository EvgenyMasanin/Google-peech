import StatisticTable from '../Components/StatisticTable/StatisticTable'
import Signin from '../Pages/Signin'
import MainPage from '../Pages/MainPage'
import Signup from '../Pages/Signup'

export enum paths {
  MAIN = '/',
  SIGNIN = '/signin',
  SIGNUP = '/signup',
  STATISTIC = '/statistic',
}

const routes = [
  { path: paths.MAIN, exact: true, component: MainPage },
  { path: paths.SIGNUP, exact: false, component: Signup },
  { path: paths.SIGNIN, exact: false, component: Signin },
  { path: paths.STATISTIC, exact: false, component: StatisticTable },
]

export default routes
