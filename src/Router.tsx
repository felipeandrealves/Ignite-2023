import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './common/layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'
import { Home } from './pages/Home'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/checkout/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
