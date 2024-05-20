import { Row } from "./Row";

export const Table = (props) => {
  const tableInfo = props.tableInfo;
  const delBtn = props.delBtn;
 
  return (
    <div className="container_table">
      <div className="labels">
        <div className="label">Дата (ДД.ММ.ГГ.)</div>
        <div className="label">Пройдено км</div>
        <div className="label">Действия</div>
      </div>
      <div className="table">
        
        {tableInfo.map((el, ind) => {    
          return (<Row key={ind} id={ind} delBtn={delBtn} tableInfo={tableInfo[ind]} />);     
        })} 
      </div>
    </div>
  );
};
