import React, { useState, memo } from 'react';

const mock = [
  {
    name: 'elad',
    last: 'ba'
  },
  {
    name: 'elad',
    last: 'ba2'
  },
  {
    name: 'elad3',
    last: 'ba'
  }
];

const ItemsList = () => {
  const [selectedItemValues, setSelectedItemValues] = useState(mock[0]);
  const [selectedItem, setSelectedItem] = useState(0);
  const [globalValue, setGlobalValue] = useState(mock);

  const handleInput = ({ target }) => {
    const newValues = { ...selectedItemValues };
    newValues[target.name] = target.value;
    setSelectedItemValues({ ...newValues });
  };

  const handleItemSelect = (index, data) => {
    setSelectedItem(index);
    setSelectedItemValues(data);
  };
  const handleSave = () => {
    console.log(selectedItemValues);
    globalValue[selectedItem] = selectedItemValues;
    // console.log(globalValue[selectedItem]);
    setGlobalValue([...globalValue]);
  };
  const parseInputs = list => {
    return list.map((oDetailes, i) => {
      return (
        <InputSkel
          key={`test_name${i}`}
          index={i}
          {...oDetailes}
          handleClick={() => handleItemSelect(i, oDetailes)}
          selected={selectedItem === i}
        />
      );
    });
  };
  return (
    <div className="item-list">
      {parseInputs(globalValue)}
      <div>
        <input onChange={handleInput} name="name" value={selectedItemValues.name} type="text" />
        <input onChange={handleInput} name="last" value={selectedItemValues.last} type="text" />
      </div>
      <button onClick={handleSave} className="btnDark">
        Save
      </button>
    </div>
  );
};

export default React.memo(ItemsList);

const InputSkel = ({ name, last, i, handleClick, selected }) => {
  return (
    <div data-selected={selected} onClick={handleClick} className="item-list__container">
      <div index={i}>{name}</div>
      <div value={last} index={i}>
        {last}
      </div>
    </div>
  );
};
