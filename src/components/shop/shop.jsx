/* eslint-disable react/prop-types */
const Shop = ({title ,subTitle, ...props}) => {
  console.log(props);
  return (
    <>
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
    <div style={{border: '1px solid red'}}>
      {props.children}
    </div>
    </>
    
  )
}


export default Shop


