
const DashboardUI = ({ details }) => {
  let message
  if (details) {
    console.log(details);
    const {userName, fullName, email, phone, password, address} = details;
    console.log(fullName);
  }

  return (
    <div>
      {details && <p>You are currently logged in as {details.email}</p>}
      {details && <p>Full Name: {details.fullName}</p>}
      {details && <p>Username: {details.userName}</p>}
      {details && <p>Email: {details.email}</p>}
      {details && <p>Address: {details.address}</p>}
    </div>
  );
}

export default DashboardUI