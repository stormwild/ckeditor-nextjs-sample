import { DESCRIPTION, TITLE } from './constants'

export const HeadContent = () => {
  return (
    <>
      <title>{TITLE}</title>
      <meta name='description' content={DESCRIPTION} />
      <link rel='icon' href='/favicon.ico' />
    </>
  )
}

export default HeadContent
