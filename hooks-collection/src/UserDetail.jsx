function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Fetch user details for a specific user
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('Error fetching UserDetail:', err));
  }, [id]);

  if (!user) return <p>Loading...</p>;
  
  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <Link to="/">← Back to Users</Link>
    </div>
  );
}
export default UserDetail;