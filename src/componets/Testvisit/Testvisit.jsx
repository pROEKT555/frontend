const Testvisit = (props) =>{
  return(
    <div className="content-block">
    <h2>Назва тесту{props.title}</h2>
    <div className="content-block-nameiuser">
      Імя створювача:{props.test1}
    </div>
    <div className="content-block-nameiuser">
      Назва контенту:{props.test2}
    </div>
    <div className="content-block-nameiuser">
      Опис контенту:{props.test3}
    </div>
    <div className="content-block-nameiuser">
      Прикріплений файл:{props.test4}
    </div>
</div>
  )
}