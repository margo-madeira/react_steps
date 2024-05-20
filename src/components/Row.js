export const Row = (props) => {
    const tableInfo = props.tableInfo;
    const delBtn = props.delBtn;
    const id = props.id;

    return (
        <div className='row'>
            <div className='label_table'>{tableInfo.date}</div>
            <div className='label_table'>{tableInfo.distance}</div>
            <div className='btns'>
                <button className='btn_table redact'></button>
                <button className='btn_table del' id={id} onClick={delBtn}></button>
            </div>
        </div>
    )
}