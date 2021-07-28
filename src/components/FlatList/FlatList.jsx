import FlatItem from "../FlatItem/FlatItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialFlat } from "../../redux/actions/flats";

const db = {
  response: [
    {
      type: "flat",
      id: 1,
      attributes: {
        title: "3-х комнатная на Минской",
        rooms: 3,
        address: {
          city: "Tyumen",
          street: "Минская",
          house: "3a",
          room: "123",
        },
        area: 134,
        unit: "квм",
      },
      relationships: {
        type: "agent",
        id: 2,
        attributes: {
          first_name: "Василий",
          last_name: "Дроздов",
          middle_name: "Михайлович",
        },
      },
    },
    {
      type: "flat",
      id: 2,
      attributes: {
        title: "1 комнатная на Барабаинской",
        rooms: 2,
        address: {
          city: "Tyumen",
          street: "Барабинская",
          house: "12",
          room: "45",
        },
        area: 34,
        unit: "квм",
      },
      relationships: {
        type: "agent",
        id: 10,
        attributes: {
          first_name: "Михаил",
          last_name: "Иванов",
          middle_name: "Демидович",
        },
      },
    },
    {
      type: "flat",
      id: 3,
      attributes: {
        title: "Квартира Ленина",
        rooms: 4,
        address: {
          city: "Tyumen",
          street: "Ленина",
          house: "134",
          room: "24",
        },
        area: 134,
        unit: "квм",
      },
      relationships: {
        type: "agent",
        id: 44,
        attributes: {
          first_name: "Степан",
          last_name: "Карачаев",
          middle_name: "Иванович",
        },
      },
    },
  ],
};

export default function FlatList() {
  const dispatch = useDispatch();
  const flats = useSelector((state) => state.response);
  useEffect(() => {
    setTimeout(() => dispatch(initialFlat(db)), 1000);
  }, [dispatch]);
  console.log(flats);

  return (
    <>
      {flats?.map((flat) => {
        return <FlatItem key={flat.id} />;
      })}
    </>
  );
}
