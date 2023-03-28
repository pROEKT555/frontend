import "./Testvisit.css"
const Testaddvisit = (props) =>{
  // eslint-disable-next-line no-unused-vars
  console.log(props.quzitrue)
  if(props.quzitrue===1){
      return(
        <div className="content-block">
          <h2>{props.title}</h2>
          <div className="content-block-nameiuser">
            <div className="content-block-true"></div>
            {props.test1}
          </div>
          <div className="content-block-nameiuser">
            <div className="content-block-notrue"></div>
            {props.test2}
          </div>
          <div className="content-block-nameiuser">
            <div className="content-block-notrue"></div>
            {props.test3}
          </div>
          <div className="content-block-nameiuser">
            <div className="content-block-notrue"></div>
            {props.test4}
          </div>
      </div>
    );
  }else if(props.quzitrue===2){
    return(
      <div className="content-block">
        <h2>{props.title}</h2>
        <div className="content-block-nameiuser">
          <div className="content-block-notrue"></div>
          {props.test1}
        </div>
        <div className="content-block-nameiuser">
          <div className="content-block-true"></div>
          {props.test2}
        </div>
        <div className="content-block-nameiuser">
          <div className="content-block-notrue"></div>
          {props.test3}
        </div>
        <div className="content-block-nameiuser">
          <div className="content-block-notrue"></div>
          {props.test4}
        </div>
    </div>
  );
  }else if(props.quzitrue===3){
      return(
        <div className="content-block">
          <h2>{props.title}</h2>
          <div className="content-block-nameiuser">
            <div className="content-block-notrue"></div>
            {props.test1}
          </div>
          <div className="content-block-nameiuser">
            <div className="content-block-notrue"></div>
            {props.test2}
          </div>
          <div className="content-block-nameiuser">
            <div className="content-block-true"></div>
            {props.test3}
          </div>
          <div className="content-block-nameiuser">
            <div className="content-block-notrue"></div>
            {props.test4}
          </div>
      </div>
    );
  }else if(props.quzitrue===4){
    return(
      <div className="content-block">
        <h2>{props.title}</h2>
        <div className="content-block-nameiuser">
          <div className="content-block-notrue"></div>
          {props.test1}
        </div>
        <div className="content-block-nameiuser">
          <div className="content-block-notrue"></div>
          {props.test2}
        </div>
        <div className="content-block-nameiuser">
          <div className="content-block-notrue"></div>
          {props.test3}
        </div>
        <div className="content-block-nameiuser">
          <div className="content-block-true"></div>
          {props.test4}
        </div>
    </div>
  );
}
};
export default Testaddvisit;