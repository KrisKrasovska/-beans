import { useEffect, useRef, useState } from 'react'
import { ErrorMessage, Section, Title } from './Home.styled'
import axios from 'axios'
import { Loader } from '../components/Loader/Loader'
import { BeanType } from '../types/types'
import BeansList from '../components/BeansList/BeansList'

const HomePage = () => {
  const [beansList, setBeansList] = useState<BeanType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [pageIndex, setPageIndex] = useState<number>(1)
  const observerTarget = useRef<HTMLDivElement | null>(null)
  const [totalCounts, setTotalCounts] = useState<number>(10)

  useEffect(() => {
    const fetchInitialBeans = async () => {
      setLoading(true)
      try {
        const results = await axios.get(
          `https://jellybellywikiapi.onrender.com/api/beans?pageIndex=${pageIndex}&pageSize=10`
        )
        const { data } = results
        console.log(data)
        const normalizedData: BeanType[] = data.items.map(
          ({ beanId, flavorName, imageUrl, description }: BeanType) => ({
            beanId,
            flavorName,
            imageUrl,
            description,
          })
        )
        setBeansList((prevBeansList) => {
          const newBeansList = normalizedData.filter(
            (newItem) =>
              !prevBeansList.some(
                (prevItem) => prevItem.beanId === newItem.beanId
              )
          )
          return [...prevBeansList, ...newBeansList]
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
      fetchInitialBeans()
    }
  }, [pageIndex, totalCounts])

  useEffect(() => {
    if (loading) {
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (entries[0].isIntersecting) {
            setPageIndex((prevPage) => prevPage + 1)
          }
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
  }, [observerTarget])

  return (
    <Section>
      <Title>All about bean</Title>
      {beansList.length > 0 && !error && <BeansList beansList={beansList} />}

      {!loading && error && (
        <ErrorMessage>
          Something went wrong, please reload the page...
        </ErrorMessage>
      )}
      {loading && beansList.length === 0 && <Loader />}
      <div ref={observerTarget}></div>
    </Section>
  )
}

export default HomePage
