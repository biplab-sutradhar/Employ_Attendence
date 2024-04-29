import React, { useRef, useEffect, forwardRef, useState } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useRowSelect,
  useGlobalFilter,
  useAsyncDebounce,
  useExpanded,
} from "react-table";
import { records as data, expandableRecords } from "./data";
import Pagination from "../paginition";
import { TbArrowsSort } from "react-icons/tb";


const sizePerPageList = [
  {
    text: "5",
    value: 5,
  },
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: data.length,
  },
];

// Define a default UI for filtering
const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  searchBoxClass,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className={searchBoxClass}>
      <span className="d-flex align-items-center">
        Search :{" "}
        <input
          type="search"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
          className="form-control w-auto ms-1"
        />
      </span>
    </div>
  );
};

const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            ref={resolvedRef}
            {...rest}
          />
          <label
            htmlFor="form-check-input"
            className="form-check-label"
          ></label>
        </div>
      </>
    );
  }
);

const Table = (props) => {
  const isSearchable = props.isSearchable || false;
  const isSortable = props.isSortable || false;
  const pagination = props.pagination || false;
  const isSelectable = props.isSelectable || false;
  const isExpandable = props.isExpandable || false;
  const sizePerPageList = props.sizePerPageList || [];

  let otherProps = {};

  if (isSearchable) {
    otherProps["useGlobalFilter"] = useGlobalFilter;
  }
  if (isSortable) {
    otherProps["useSortBy"] = useSortBy;
  }
  if (isExpandable) {
    otherProps["useExpanded"] = useExpanded;
  }
  if (pagination) {
    otherProps["usePagination"] = usePagination;
  }
  if (isSelectable) {
    otherProps["useRowSelect"] = useRowSelect;
  }

  const dataTable = useTable(
    {
      columns: props.columns,
      data: props.data,
      initialState: { pageSize: props.pageSize || 10 },
    },
    otherProps.hasOwnProperty("useGlobalFilter") &&
      otherProps["useGlobalFilter"],
    otherProps.hasOwnProperty("useSortBy") && otherProps["useSortBy"],
    otherProps.hasOwnProperty("useExpanded") && otherProps["useExpanded"],
    otherProps.hasOwnProperty("usePagination") && otherProps["usePagination"],
    otherProps.hasOwnProperty("useRowSelect") && otherProps["useRowSelect"],
    (hooks) => {
      isSelectable &&
        hooks.visibleColumns.push((columns) => [
          {
            id: "selection",
            Header: ({ getToggleAllPageRowsSelectedProps }) => (
              <div>
                <IndeterminateCheckbox
                  {...getToggleAllPageRowsSelectedProps()}
                />
              </div>
            ),
            Cell: ({ row }) => (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ]);

      isExpandable &&
        hooks.visibleColumns.push((columns) => [
          {
            id: "expander",
            Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
              <span {...getToggleAllRowsExpandedProps()}>
                {isAllRowsExpanded ? "-" : "+"}
              </span>
            ),
            Cell: ({ row }) =>
              row.canExpand ? (
                <span
                  {...row.getToggleRowExpandedProps({
                    style: {
                      paddingLeft: `${row.depth * 2}rem`,
                    },
                  })}
                >
                  {row.isExpanded ? "-" : "+"}
                </span>
              ) : null,
          },
          ...columns,
        ]);
    }
  );

  let rows = pagination ? dataTable.page : dataTable.rows;

  return (
    <>
      {isSearchable && (
        <GlobalFilter
          preGlobalFilteredRows={dataTable.preGlobalFilteredRows}
          globalFilter={dataTable.state.globalFilter}
          setGlobalFilter={dataTable.setGlobalFilter}
          searchBoxClass={props.searchBoxClass}
        />
      )}

      <div className="table-responsive">
        <table
          {...dataTable.getTableProps()}
          className={`table table-centered react-table ${props.tableClass}`}
        >
          <thead className={props.theadClass}>
            {(dataTable.headerGroups || []).map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {(headerGroup.headers || []).map((column) => (
                  <th
                    {...column.getHeaderProps(
                      column.sort && column.getSortByToggleProps()
                    )}
                    className={({
                      sorting_desc: column.isSortedDesc === true,
                      sorting_asc: column.isSortedDesc === false,
                      sortable: column.sort === true,

                    })}
                  > 
                  <div className=" d-flex justify-content-center allign-items-center  ">
                    <TbArrowsSort /> 
                    {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...dataTable.getTableBodyProps()}>
            {(rows || []).map((row, i) => {
              dataTable.prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {(row.cells || []).map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps([
                          {
                            className: cell.column.className,
                          },
                        ])}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {(
        <Pagination tableProps={dataTable} sizePerPageList={sizePerPageList} />
      )}
    </>
  );
};

export default Table;
