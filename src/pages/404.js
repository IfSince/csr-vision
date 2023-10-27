import { useEffect } from 'react'
import { navigate } from 'gatsby'
import { Seo } from '../components/seo.js'

const NotFoundPage = () => useEffect(() => navigate('/'), [])

export const Head = () => <Seo title="404"/>

export default NotFoundPage