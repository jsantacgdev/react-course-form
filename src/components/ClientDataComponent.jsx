import PropTypes from "prop-types";

export const ClientDataComponent = ({ title, client }) => {
  const {
    name: clientName,
    lastName,
    address: { country, city, street, number },
  } = client;

  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group">
        <li className="list-group-item active">
          {clientName} {lastName}
        </li>
        <li className="list-group-item">
          {street}, {number}
        </li>
        <li className="list-group-item">
          {city}, {country}
        </li>
      </ul>
    </>
  );
};

ClientDataComponent.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.object.isRequired,
};
