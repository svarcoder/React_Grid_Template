import { withTheme, ThemeProps } from 'styled-components'
import { TwoColumns, ThreeColumns, FourColumns, FiveColumns } from '../../styles/styled'
import * as Styled from './style'

export const Home: React.FC = withTheme((props: ThemeProps<any>) => {
  const DummyArray = [
    {
      name: 'React Grid Template',
      url: 'https://github.com/Rapid-Innovation-Starters/web-react-grid-frontend-grid',
    },
    {
      name: 'React Basic Starter Template',
      url: 'https://github.com/Rapid-Innovation-Starters/web-react-js-frontend-starter',
    },
    {
      name: 'React Wallet Template',
      url: 'https://github.com/Rapid-Innovation-Starters/web-react-blockchain-frontend-wallet',
    },
    {
      name: 'React Form Template',
      url: 'https://github.com/Rapid-Innovation-Starters/web-react-formik-frontend-form',
    },
    {
      name: 'React Solana Template',
      url: 'https://github.com/Rapid-Innovation-Starters/web-react-solana-frontend-solana',
    },
    {
      name: 'React AMM Template',
      url: 'https://github.com/Rapid-Innovation-Starters/web-react-amm-frontend-amm',
    },
  ]
  const { theme } = props

  const toGitHubLink = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <>
      <Styled.HomeContainer>
        <Styled.TopHeading>Grid Structure</Styled.TopHeading>
        <Styled.SubHeading>
          For the over all structuring of the page we have to use the Grid system only, as it helps up to define the
          content alignment and is very easy to customize and use. There are few examples of Responsive Grid shown below
          which you can use in any project and also customize accordingly to your need, We should never use Flex for the
          structure build up as they are complex to handle on the responsiveness.
        </Styled.SubHeading>
        <Styled.Heading> Two Columns</Styled.Heading>
        <TwoColumns>
          {DummyArray.map((item, i) => {
            return <Styled.DummyCard onClick={() => toGitHubLink(item.url)}>{item.name}</Styled.DummyCard>
          })}
        </TwoColumns>

        <Styled.Heading> Three Columns</Styled.Heading>
        <ThreeColumns>
          {DummyArray.map((item, i) => {
            return <Styled.DummyCard>{item.name}</Styled.DummyCard>
          })}
        </ThreeColumns>

        <Styled.Heading> Four Columns</Styled.Heading>
        <FourColumns>
          {DummyArray.map((item, i) => {
            return <Styled.DummyCard>{item.name}</Styled.DummyCard>
          })}
        </FourColumns>

        <Styled.Heading> Five Columns</Styled.Heading>
        <FiveColumns>
          {DummyArray.map((item, i) => {
            return <Styled.DummyCard>{item.name}</Styled.DummyCard>
          })}
        </FiveColumns>

        <Styled.Heading> Screen Breakup using the (FR)</Styled.Heading>
        <Styled.SubHeading>
          {' '}
          You can break up the screen in desired size ratio with the use of Grid (fr)
        </Styled.SubHeading>

        <Styled.LeftGridRow>
          <Styled.DummyColumn>Left (30%) -3fr</Styled.DummyColumn>
          <Styled.DummyColumn>Right (70%) -9fr</Styled.DummyColumn>
        </Styled.LeftGridRow>

        <Styled.EqualGridRow>
          <Styled.DummyColumn>Left (50%)- 6fr</Styled.DummyColumn>
          <Styled.DummyColumn>Right (50%) -6fr</Styled.DummyColumn>
        </Styled.EqualGridRow>

        <Styled.RightGridRow>
          <Styled.DummyColumn>Left (70%) -9fr</Styled.DummyColumn>
          <Styled.DummyColumn>Right (30%) -3fr</Styled.DummyColumn>
        </Styled.RightGridRow>

        <Styled.TopHeading>When to use Flex ?</Styled.TopHeading>
        <Styled.SubHeading>
          Flex should only be used inside any particular area or div, should not be used for the structuring, Flex also
          provide some unique properties which are helpful for setting up the fixed size content, below are some
          examples how to use flex.
        </Styled.SubHeading>

        <Styled.Heading> Align content to the center of div</Styled.Heading>

        <Styled.CenterFlex>
          <Styled.DummyFlexColumn>Div will be in the center of the parent</Styled.DummyFlexColumn>
        </Styled.CenterFlex>




      </Styled.HomeContainer>
    </>
  )
})
