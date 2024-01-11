import { Routes, Route } from 'react-router-dom'
import { Success } from './pages/Success'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout/index'
import { DefaultLayout } from './layout/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Success" element={<Success />}></Route>
        <Route path="/Checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  )
}
