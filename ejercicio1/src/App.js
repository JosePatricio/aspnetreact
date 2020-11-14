import React, { useEffect, useState } from "react";
import GridPager from "./components/GridPager";
import { GlobalProvider } from "./context/GlobalState";
import services from "./services/services";

let rowss = [];

const App = () => {
  const [Data, setData] = useState({
    Size: 0,
    currentPage: 1,
    filterCriteria: "Contains",
    List: [],
    totalPage: 0,
    sortColumnName: null,
    sortOrder: "asc",
    pageSize: 5,
    sortSubmitted: false,
    filter:"",
    isLoading: false,
  });

  const [rows, setRows] = useState([]);
  
  
  function EmployeeGridRow(props) {
    return (
      <tr>
        <td>{props.item.nombre}</td>
        <td>{props.item.autor}</td>
        <td>{props.item.descripcion}</td>
        <td>{props.item.costo}</td>
        <td>{props.item.ejemplares}</td>
      </tr>
    );
  }

  const populateData = async () => {
    let params = {
      pageSize: Data.pageSize,
      currentPage: Data.currentPage,
      filterCriteria: Data.filterCriteria,
      filter: Data.filter,
    };

    if (Data.sortColumnName) {
      params.sortColumnName = Data.sortColumnName;
    }
    if (Data.sortOrder) {
      params.sortOrder = Data.sortOrder;
    }
    const {data} = await services.getAll(params);
  
    return data;
  };

  const pageChanged=(pageNumber, e) =>{

   setData((data) => ({
      ...data,
      currentPage: pageNumber,
      sortSubmitted:true
    }));
   
  }

  const sortChanged = (sortColumnName, order, e) => {
    if (e != null) {
      setRows([]);
      setData((data) => ({
        ...data,
        sortColumnName: sortColumnName,
        currentPage: 1,
        sortOrder: order.toString().toLowerCase() == "asc" ? "desc" : "asc",
        sortSubmitted: true,
      }));
    }
  };

  function _sortClass(filterName) {
    return (
      "fa fa-fw " +
      (filterName == Data.sortColumnName
        ? "fa-sort-" + Data.sortOrder
        : "fa-sort")
    );
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((data) => ({
      ...data,
     
      filter: value,
      sortSubmitted: true,
    }));

  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setData((data) => ({
      ...data,
      filterCriteria: value,
    }));
  };

  useEffect(() => {
    const executeAsync = async () => {
      const data = await populateData();

      let rows_ = [];
      data.List.forEach(function (item) {
        rows_.push(<EmployeeGridRow key={item.id_libro} item={item} />);
      });
      setData(data);
      setRows(rows_);
    };

    executeAsync();
  }, []);

  useEffect(() => {
    const executeAsync = async () => {
      if (Data.sortSubmitted) {
        const data = await populateData();

        let rows_ = [];
        data.List.forEach(function (item) {
          rows_.push(<EmployeeGridRow key={item.id_libro} item={item} />);
        });
        setRows(rows_);
        setData((data) => ({
          ...data,
          sortSubmitted: false,
        }));
      }
    };

    executeAsync();
  }, [Data.sortSubmitted]);

 
  
  return (
    <GlobalProvider>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Ejercicio 1</h1>
    
       
          <div>
            <table className="table table-responsive table-bordered">
              <thead>
                <tr>
                  <th>
                    <select
                      id="selectID"
                      value={Data.filterCriteria}
                      onChange={handleSelectChange}
                    >
                      <option value="Contains">Contains</option>
                      <option value="Not Contains">Not Contains</option>
                      <option value="Equals">Equals</option>
                      <option value="Not equal">Not equal</option>
                      <option value="Starts with">Starts with</option>
                      <option value="Ends with">Ends with</option>
                    </select>
                    <br />

                    <input
                      type="text"
                      placeholder="filtro"
                      value={Data.filter}
                      onChange={handleChange}
                    />
                    <br />
                    <div
                      onClick={sortChanged.bind(this, "nombre", Data.sortOrder)}
                    >
                      Nombre
                      <i className={_sortClass("nombre")}></i>
                    </div>
                  </th>
                  <th onClick={sortChanged.bind(this, "autor", Data.sortOrder)}>
                   ----------------<br/>
                    Autor
                    <i className={_sortClass("autor")}></i>
                  </th>
                  <th
                    onClick={sortChanged.bind(
                      this,
                      "descripcion",
                      Data.sortOrder
                    )}
                  >----------------<br/>
                    Descripcion
                    <i className={_sortClass("descripcion")}></i>
                  </th>
                  <th onClick={sortChanged.bind(this, "costo", Data.sortOrder)}>
                  ----------------<br/>
                    Costo
                    <i className={_sortClass("costo")}></i>
                  </th>
                  <th
                    onClick={sortChanged.bind(
                      this,
                      "ejemplares",
                      Data.sortOrder
                    )}
                  >----------------<br/>
                    Ejemplares
                    <i className={_sortClass("ejemplares")}></i>
                  </th>
                </tr>
              </thead>
              {rows.length > 0 && rows}
            </table>
          </div>
        
    
    {rows.length > 0 && <GridPager Size={Data.totalPage} onPageChanged={pageChanged} currentPage={Data.currentPage} />}  
      </div>
    </GlobalProvider>
  );
};

export default App;
