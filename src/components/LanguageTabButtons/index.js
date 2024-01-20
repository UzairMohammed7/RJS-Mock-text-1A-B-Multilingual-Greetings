import {ButtonList, LanguageButton} from './StyledComponents'

const LanguageTabButtons = props => {
  const {buttonDetails, changeLanguage, isActive} = props
  const {buttonText, id} = buttonDetails

  const onClickLanguageButton = () => {
    changeLanguage(id)
  }

  const buttonBgColor = isActive ? '#db1c48' : '#ffffff'
  const buttonTextColor = isActive ? '#ffffff' : '#db1c48'
  const buttonBorderWidth = isActive ? '0' : '2'
  const buttonBorderStyle = isActive ? 'none' : 'solid'

  return (
    <ButtonList>
      <LanguageButton
        onClick={onClickLanguageButton}
        bgColor={buttonBgColor}
        color={buttonTextColor}
        borderWidth={buttonBorderWidth}
        borderStyle={buttonBorderStyle}
      >
        {buttonText}
      </LanguageButton>
    </ButtonList>
  )
}

export default LanguageTabButtons
