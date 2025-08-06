function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Error fetching users:', err));
  }, []);
  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <Link to={`/user/${user.id}`} key={user.id}>
          {user.name}
        </Link>
      ))}
    </div>
  );
}
export default UserList;