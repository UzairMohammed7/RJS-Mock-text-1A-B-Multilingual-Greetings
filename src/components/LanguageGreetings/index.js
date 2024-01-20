import {ImageContainer, Image} from './StyledComponents'

const LanguageGreetings = props => {
  const {LanguageDetails} = props
  const {imageUrl, imageAltText} = LanguageDetails

  return (
    <>
      <ImageContainer>
        <Image src={imageUrl} alt={imageAltText} />
      </ImageContainer>
    </>
  )
}

export default LanguageGreetings
