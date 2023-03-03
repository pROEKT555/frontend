import './Contentvisitscript.css'
const Contentvisitscript = (props) =>{
  return(
    <div className="content-block">
        <div className="content-block-nameiuser">
          Імя створювача:{props.name}
        </div>
        <div className="content-block-nameiuser">
          Назва контенту:{props.title}
        </div>
        <div className="content-block-nameiuser">
          Опис контенту:{props.description}
        </div>
        <div className="content-block-nameiuser">
          Прикріплений файл:{props.file}
        </div>
    </div>
  )
}

export default Contentvisitscript;