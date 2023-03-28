const Testvisitscript = (props) =>{
  return(
    <div className="test-block">
        <div className="test-block-title">
          Назва тесту:{props.title}
        </div>
        <div className="test-block-subtitle">
          Автор тесту{props.subtitle}
        </div>
          <button className="test-block-button">Перейти на тест</button>
    </div>
  )
}

export default Testvisitscript;