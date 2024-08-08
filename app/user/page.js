export default async function User() {
  const res = await fetch("http://localhost:3001/api/User");
  const data = await res.json();
  return (
    <>
<br />
      <div>
        <h2>Users</h2>
        <ul>
          {data.map((data) => (
            <li>Firstname : {data.firstname}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

