import { useEffect, useRef, useState } from 'react'
import { MileStone } from '../types/types'
import { ErrorMessage, Section, Title } from './Home.styled'
import axios from 'axios'
import { Loader } from '../components/Loader/Loader'
import HistoryList from '../components/HistoryList/HistoryList'

const History = () => {
  const [historyList, setHistoryList] = useState<MileStone[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [pageIndex, setPageIndex] = useState<number>(1)
  const observerTarget = useRef<HTMLDivElement | null>(null)
  const [totalCounts, setTotalCounts] = useState<number>(10)

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true)
      try {
        const results = await axios.get(
          `https://jellybellywikiapi.onrender.com/api/mileStones?pageIndex=${pageIndex}&pageSize=10`
        )
        const { data } = results
        console.log(data)
        setHistoryList((prevHistoryList) => {
          const newHistoryList = data.items.filter(
            (newItem: MileStone) =>
              !prevHistoryList.some(
                (prevItem) => prevItem.mileStoneId === newItem.mileStoneId
              )
          )
          return [...prevHistoryList, ...newHistoryList]
        })
        setTotalCounts(data.totalCount)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setError('Error! Try again or return to home page')
        setLoading(false)
      }
    }
    if (pageIndex <= Math.ceil(totalCounts / 10)) {
      fetchHistory()
    }
  }, [pageIndex, totalCounts])

  useEffect(() => {
    if (loading) {
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPageIndex((prevPage) => prevPage + 1)
        }
      },
      { threshold: 1 }
    )

    const currentTarget = observerTarget.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [observerTarget, loading])

  return (
    <Section>
      <Title>History of beans</Title>
      {historyList.length > 0 && !error && (
        <HistoryList historyList={historyList} />
      )}

      {!loading && error && (
        <ErrorMessage>
          Something went wrong, please reload the page...
        </ErrorMessage>
      )}
      {loading && historyList.length === 0 && <Loader />}
      {historyList.length > 0 && <div ref={observerTarget}></div>}
    </Section>
  )
}

export default History
