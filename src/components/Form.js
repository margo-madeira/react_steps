import { Table } from "./Table";
import { useState } from "react";

export const Form = (e) => {
  const steps = [
    {
      date: "20.07.2019",
      distance: "5.7",
    },
    {
      date: "19.07.2019",
      distance: "14.2",
    },
  ];
  const [tableInfo, setStateTabel] = useState(steps);

  const onSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const formData = new FormData(target);
    const data = Object.fromEntries(formData);

    if (
      data.date.length === 10 &&
      data.date[2] === "." &&
      data.date[5] === "." &&
      (Number.isInteger(data.distance) || data.distance.includes("."))
    ) {
      [...tableInfo].map((el) => {
        if (el.date === data.date) {
          el.distance = Number(el.distance) + Number(data.distance);
          return setStateTabel([...tableInfo]);
        } else {
          if (
            new Date(
              `${el.date.slice(6, 10)} - ${el.date.slice(
                3,
                5
              )} - ${el.date.slice(0, 3)}`
            ) <
            new Date(
              `${el.date.slice(6, 10)} - ${el.date.slice(
                3,
                5
              )} - ${el.date.slice(0, 3)}`
            )
          ) {
            let ind =
              [...tableInfo].findIndex((elem) => elem.date === el.date) - 1;
            return setStateTabel([
              ...tableInfo.slice(0, ind),
              data,
              ...tableInfo.slice(ind),
            ]);
          }
        }

        if ([...tableInfo].findIndex(el) === [...tableInfo].length - 1) {
          return setStateTabel([...tableInfo, data]);
        }
      });
    }
  };

  const delBtn = (e) => {
    setStateTabel(
      [...tableInfo].filter(
        (el) =>
          e.target.parentElement.previousElementSibling
            .previousElementSibling !== el.date
      )
    );
  };

  return (
    <div className="container">
      <form className="form" onSubmit={onSubmit}>
        <div className="block">
          <div className="label">Дата (ДД.ММ.ГГ.)</div>
          <input type="text" name="date" className="field" />
        </div>
        <div className="block">
          <div className="label">Пройдено км</div>
          <input type="text" name="distance" className="field" />
        </div>
        <button className="btn">OK</button>
      </form>
      <Table tableInfo={tableInfo} delBtn={delBtn} />
    </div>
  );
};
