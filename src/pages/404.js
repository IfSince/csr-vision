import { useEffect } from 'react'
import { navigate } from 'gatsby'

const NotFoundPage = () => useEffect(() => navigate('/'), [])

export const Head = () => <title>404 Seite</title>

export default NotFoundPage