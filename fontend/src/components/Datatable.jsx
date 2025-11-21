import { FaEye, FaMagic } from "react-icons/fa";
const Datatable = ({ title, columns, data }) => {

    return (
        <div>
            <div className="container" style={{ marginTop: '40px' }}>
                <h4 className="teal-text text-lighten-2">{title}</h4>
            </div>
            {/* <Table hoverable striped className="responsive-table"> */}
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.accessor}>{column.header}</th>
                    ))}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item._id}>
                        {columns.map((column) => (
                            <td key={column.accessor}>{item[column.accessor]}</td>
                        ))}
                        <td>
                            <button className="btn-flat" onClick={() => onViewDetail(product)} title="View Detail">
                                <i className="material-icons">visibility</i>
                            </button>
                            <button className="btn-flat" onClick={() => onTryOn(product)} title="Try On">
                                {/* <i className="material-icons">visibility</i> */}
                                <i className="material-icons">touch_app</i>
                            </button>d  vc
                        </td>
                    </tr>
                ))}
            </tbody>
            {/* </Table> */}

        </div>
    );
};

export default Datatable;
