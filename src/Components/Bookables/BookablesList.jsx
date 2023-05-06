import React, { useState, useEffect } from "react";
import { bookables, sessions, days } from "../../data/static.json";
import { FaArrowRight } from "react-icons/fa";

export default function BookablesList() {
  const [group, setGroup] = useState("Kit");
  const [bookableIndex, setBookableIndex] = useState(1);
  const [hasDetails, setHasDetails] = useState(false);

  const getUniqueValues = (array, property) => {
    const propValues = array.map((element) => element[property]);
    const uniqueValues = new Set(propValues);
    const uniqueValuesArray = [...uniqueValues];

    return uniqueValuesArray;
  };

  // const group = "Rooms";
  // const groups = [...new Set(bookables.map(book => book.group))];
  const groups = getUniqueValues(bookables, "group");

  const bookablesInGroup = bookables.filter((book) => book.group === group);
  const bookable = bookablesInGroup[bookableIndex];

  // Old ways code without useState doesn't update UI
  // let bookableIndex = 1;

  // const changeBookable = (selectedIndex) => {
  //     bookableIndex = selectedIndex;
  //     console.log(selectedIndex);
  // };

  // event handler for button
  const nextBookable = () => {
    setBookableIndex((index) => (index + 1) % bookablesInGroup.length);
  };

  useEffect(() => {
    console.log(bookableIndex);
  }, [bookableIndex]);

  return (
    <>
      <select
        value={group}
        onChange={(e) => setGroup(e.target.value)}
        style={{ height: 20, width: "6rem" }}
      >
        {groups.map((group) => (
          <option value={group} key={group}>
            {group}
          </option>
        ))}
      </select>
      <ul className="bookables items-list-nav">
        {bookablesInGroup.map((book, index) => (
          <li
            key={book.id}
            className={index === bookableIndex ? "selected" : null}
          >
            <button
              className="btn"
              onClick={() => {
                setBookableIndex(index);
              }}
            >
              {book.title}
            </button>
          </li>
        ))}
      </ul>
      <p>
        <button className="btn" onClick={nextBookable} autoFocus>
          <FaArrowRight /> <span>Next</span>
        </button>
      </p>

      {bookable ? (
        <div className="bookable-details">
          <div className="item">
            <div className="item-header">
              <h2>{bookable.title}</h2>
              <span className="controls">
                <label>
                  <input
                    type="checkbox"
                    checked={hasDetails}
                    onChange={() => setHasDetails((has) => !has)}
                  />
                  Show Details
                </label>
              </span>
            </div>
            <p>{bookable.notes}</p>

            {hasDetails && (
              <div className="item-details">
                <h3>Availability</h3>
                <div className="bookable-availability">
                  <ul>
                    {bookable.days.sort().map((d) => (
                      <li key={d}>{days[d]}</li>
                    ))}
                  </ul>
                  <ul>
                    {bookable.sessions.map((s) => (
                      <li key={s}>{sessions[s]}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
