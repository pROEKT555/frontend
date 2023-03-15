const Testvisit = (props) =>{
  let arr =[props.test1,props.test2,props.test3,props.test4]
  // eslint-disable-next-line no-unused-vars
  const Visittesttop = () =>{
    console.log(arr.length)
    for(let x=1;x<=arr.length;x++){
      console.log(x)
      if(props.quzitrue==x){
        console.log(false)
        console.log(arr[x])
        return(
          <div className="content-block">
            <div className="content-block-nameiuser"></div>
            <div className="content-block-notrue">
            {arr[x]}
            </div>
          </div>
        );
        console.log(44);
      }else if(props.quzitrue!==x){
        console.log(true)
        console.log(arr[x])
        return(
        <div className="content-block">
          <div className="content-block-nameiuser content-block-nameiuser-true">

          </div>
          <div className="content-block-true">
            {arr[x]}
          </div>
        </div>
        )
      }
    }
  }
  return(
    <div className="content-block">
      <h2>Назва тесту{props.title}</h2>
      <Visittesttop></Visittesttop>
    </div>
  )
};
export default Testvisit;