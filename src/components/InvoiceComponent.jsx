import PropTypes from "prop-types";

export const InvoiceComponent = ({ id, name }) => {
  return (
    <>
      <ul className="list-group my-3">
        <li className="list-group-item">Id: {id}</li>
        <li className="list-group-item">Name: {name}</li>
      </ul>
    </>
  );
};

InvoiceComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
