import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getBpiUSD } from '../redux/actionCreators'

export const useGetPrice = () => {
    const dispatch = useDispatch()

    const { price, loading, error } = useSelector(state => state)

    useEffect(() => {
        dispatch(getBpiUSD())
    }, [])
    return { price, loading, error }
}