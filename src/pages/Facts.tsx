import { createRef, RefObject, useEffect, useRef, useState } from 'react'
import { FactsType } from '../types/types'
import { ErrorMessage, Section, Title } from './Home.styled'
import axios from 'axios'
import FactsList from '../components/FactsList/FactsList'
import { Loader } from '../components/Loader/Loader'

const Facts = () => {
  const [factsList, setFactsList] = useState<FactsType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [pageIndex, setPageIndex] = useState<number>(1)
  const lastItem: RefObject<HTMLLIElement> = createRef()
  const observer = useRef<IntersectionObserver | null>(null)
  const [totalCounts, setTotalCounts] = useState<number>(10)

  useEffect(() => {
    const fetchFacts = async () => {
      setLoading(true)
      try {
        const results = await axios.get(
          `https://jellybellywikiapi.onrender.com/api/facts?pageIndex=${pageIndex}&pageSize=10`
        )
        const { data } = results
        const normalizedData: FactsType[] = data.items.map(
          ({ factId, title, description }: FactsType) => ({
            factId,
            title,
            description,
          })
        )
        setFactsList((prevFactsList) => {
          const newFactsList = normalizedData.filter(
            (newItem) =>
              !prevFactsList.some(
                (prevItem) => prevItem.factId === newItem.factId
              )
          )
          return [...prevFactsList, ...newFactsList]
        })
        setTotalCounts(data.totalCount)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setError('Error! Try again or return to home page')
        setLoading(false)
      }
    }
    if (pageIndex <= totalCounts / 10) fetchFacts()
  }, [pageIndex, totalCounts])

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect()
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (pageIndex < totalCounts / 10)
          setPageIndex((prevPage) => prevPage + 1)
      }
    })

    if (lastItem.current) {
      observer.current.observe(lastItem.current)
    }
  }, [lastItem, totalCounts, pageIndex])

  return (
    <Section>
      <Title>Interesting Facts</Title>
      {factsList.length > 0 && !error && (
        <FactsList lastItem={lastItem} factsList={factsList} />
      )}

      {!loading && error && (
        <ErrorMessage>
          Something went wrong, please reload the page...
        </ErrorMessage>
      )}
      {loading && factsList.length === 0 && <Loader />}
    </Section>
  )
}

export default Facts
