import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Loader } from '../components/Loader/Loader'
import { BeanCard } from '../types/types'
import {
  Card,
  CardImage,
  CardList,
  ErrorMessage,
  Section,
  Button,
} from './Home.styled'
import { CardText, CardTitle } from '../components/BeansList/BeansList.styled'

const BeansPage = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const { id } = useParams()
  const [bean, setBean] = useState<BeanCard | null>(null)
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  useEffect(() => {
    const fetchBean = async () => {
      setLoading(true)
      try {
        const searchBean = await axios.get(
          `https://jellybellywikiapi.onrender.com/api/beans/${id}`
        )
        setBean(searchBean.data)
        setLoading(false)
      } catch (err) {
        toast.error('Error! Try again or return to home page')
        console.log(err)
        setLoading(false)
        setError('Error! Try again or return to home page')
      }
    }
    fetchBean()
  }, [id])

  return (
    <Section>
      <Button onClick={() => handleBackClick()}>Back</Button>
      <Card>
        {loading && <Loader />}
        {!loading && error && (
          <ErrorMessage>
            Something went wrong, please reload the page...
          </ErrorMessage>
        )}
        <CardTitle>{bean?.flavorName}</CardTitle>
        <CardImage src={bean?.imageUrl} alt='bean' width={200} />
        <CardText>{bean?.description}</CardText>
        <CardText>Name group: {bean?.groupName.join(', ')}</CardText>
        <CardText>Ingredients: {bean?.ingredients.join(', ')}</CardText>
        <CardList>
          <li>
            <p>Color group:</p>
            <CardText>{bean?.colorGroup}</CardText>
          </li>
          <li>
            <p>Hexadecimal Color:</p>
            <CardText>{bean?.backgroundColor}</CardText>
          </li>
          <li>
            <p>ID:</p>
            <CardText>{bean?.beanId}</CardText>
          </li>
          <li>
            <p>Kosher:</p>
            <CardText>{bean?.kosher ? 'Yes' : 'No'}</CardText>
          </li>
          <li>
            <p>Seasonal:</p>
            <CardText>{bean?.seasonal ? 'Yes' : 'No'}</CardText>
          </li>
          <li>
            <p>Gluten free:</p>
            <CardText>{bean?.glutenFree ? 'Yes' : 'No'}</CardText>
          </li>
          <li>
            <p>Sugar free:</p>
            <CardText>{bean?.sugarFree ? 'Yes' : 'No'}</CardText>
          </li>
        </CardList>
      </Card>
    </Section>
  )
}

export default BeansPage
