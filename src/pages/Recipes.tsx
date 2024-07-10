import { useEffect, useRef, useState } from 'react'
import { RecipeType } from '../types/types'
import { ErrorMessage, Section, Title } from './Home.styled'
import axios from 'axios'
import { Loader } from '../components/Loader/Loader'
import RecipesList from '../components/RecipesList/RecipesList'

const Recipes = () => {
  const [recipesList, setRecipesList] = useState<RecipeType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [pageIndex, setPageIndex] = useState<number>(1)
  const observerTarget = useRef<HTMLDivElement | null>(null)
  const [totalCounts, setTotalCounts] = useState<number>(10)

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true)
      try {
        const results = await axios.get(
          `https://jellybellywikiapi.onrender.com/api/recipes?pageIndex=${pageIndex}&pageSize=10`
        )
        const { data } = results
        console.log(data)
        const normalizedData: RecipeType[] = data.items.map(
          ({
            recipeId,
            name,
            description,
            totalTime,
            makingAmount,
          }: RecipeType) => ({
            recipeId,
            name,
            description,
            totalTime,
            makingAmount,
          })
        )
        setRecipesList((prevRecipesList) => {
          const newRecipesList = normalizedData.filter(
            (newItem: RecipeType) =>
              !prevRecipesList.some(
                (prevItem) => prevItem.recipeId === newItem.recipeId
              )
          )
          return [...prevRecipesList, ...newRecipesList]
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
      fetchRecipes()
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
      <Title>Recipes</Title>
      {recipesList.length > 0 && !error && (
        <RecipesList recipesList={recipesList} />
      )}

      {!loading && error && (
        <ErrorMessage>
          Something went wrong, please reload the page...
        </ErrorMessage>
      )}
      {loading && recipesList.length === 0 && <Loader />}
      {recipesList.length > 0 && <div ref={observerTarget}></div>}
    </Section>
  )
}

export default Recipes
