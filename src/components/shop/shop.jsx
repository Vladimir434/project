/* eslint-disable react/prop-types */
const Shop = ({title ,subTitle, ...props}) => {
  console.log(props);
  return (
    <>
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
    <div style={{border: '1px solid red', padding:'21px', margin:'123px 0 0 0'}}>
      {title}, {subTitle}
    </div>
    </>
    
  )
}


export default Shop


