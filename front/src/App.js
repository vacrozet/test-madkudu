import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import Table from "./component/table";
import Select from "./component/select";
import Slider from "./component/slider";
import Button from "./component/button";

import "./App.css";

import api from "./utils/rest/";

const removeDuplicates = (array) => {
  const uniqueSet = new Set(array);
  return [...uniqueSet];
};

const initialState = {
  continent: null,
  horns: null,
  weight: {
    min: null,
    max: null,
  },
  height: {
    min: null,
    max: null,
  },
};

const App = () => {
  const [rows, setRows] = useState([]);
  const [firstLoaded, setFirstLoaded] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [horns, setHorns] = useState(null);
  const [continent, setContinent] = useState([]);
  const [target, setTarget] = useState(initialState);
  const [rangeHeight, setRangeHeight] = useState(null);
  const [rangeWeight, setRangeWeight] = useState(null);

  const handleChange = (name) => (e) => {
    setTarget((prevState) => {
      const findData = { ...prevState };
      findData[name] = e;
      return findData;
    });
  };

  const handleChangeSlider = (name) => (e) => {
    setTarget((prevState) => {
      const findData = { ...prevState };
      findData[name].min = e[0];
      findData[name].max = e[1];
      return findData;
    });
  };

  const getMax = (data, key) => {
    let max = 0;
    data.map((el) => {
      if (el[key] > max) {
        max = el[key];
      }
      return null;
    });
    return max;
  };

  const getActualiseData = async () => {
    setLoaded(false);
    const data = await api.getAnimals(target);
    setRows(data);
    setLoaded(true);
  };

  const resetButton = async () => {
    setLoaded(false);
    setTarget(initialState);
    const data = await api.getAnimals({});
    setRows(data);
    setLoaded(true);
  };

  const getAnimals = React.useCallback(async () => {
    const data = await api.getAnimals({});

    const loadContinent = data.map((el) => el.continent);
    const loadHorns = data.map((el) => el.horns);

    setContinent(removeDuplicates(loadContinent));
    setHorns(removeDuplicates(loadHorns));
    const maxHeight = getMax(data, "height");
    const maxWeight = getMax(data, "weight");
    setRangeHeight([0, maxHeight]);
    setRangeWeight([0, maxWeight]);
    setRows(data);
    setLoaded(true);
    setFirstLoaded(true);
  }, []);

  useEffect(() => {
    getAnimals({});
  }, [getAnimals]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Test Madkudu</p>
      </header>
      {firstLoaded && (
        <section className="App-section">
          <div className="App-select">
            <Select
              options={continent}
              value={target.continent}
              name="Continent"
              onChange={handleChange("continent")}
            />
            <Select
              options={horns}
              value={target.horns}
              name="Horns"
              onChange={handleChange("horns")}
            />

            <Slider
              title={"Weight"}
              onChange={handleChangeSlider("weight")}
              rangeValue={rangeWeight}
            />

            <Slider
              title={"Height"}
              onChange={handleChangeSlider("height")}
              rangeValue={rangeHeight}
            />
            <Button text={"Search"} doAction={getActualiseData} />
            <Button text={"Reset"} doAction={resetButton} />
          </div>
        </section>
      )}
      {loaded && (
        <section className="App-section-table">
          <div style={{ height: "300px", width: "100%" }}>
            {loaded && <Table rows={rows} />}
          </div>
        </section>
      )}
    </div>
  );
};

export default App;
