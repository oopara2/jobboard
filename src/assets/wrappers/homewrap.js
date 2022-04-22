import styled from 'styled-components'

const Wrapper = styled.main`
nav{
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height: var(--nav-height);
  display: flex;
  alighn-items: center;
}
.page{
min-height: calc(100vh - var(--nav--height));
display:grid;
align-items: center:
margin-top: -3rem;
}
//style Header but using span to target Tracking specifically
h1{
  font-weight: 700;
  span{
    color: var(--primary-500);
  }
}
p{
  color: var(--grey-600)
}
.main-img{
  display: none;
}
//shows image but if if image is smaller then the main pic will not show
@media (min-width:992px){
  .page{
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    }
    .main-img{
      display:block;
    }
}
`

export default Wrapper