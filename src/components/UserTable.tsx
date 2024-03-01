

export default function UserTable ({users}){

    return(          
      <table className="simple-table">
          <thead>
              <tr>
                  <td>
                      ID
                  </td>
                  <td>
                      Name
                  </td>
                  <td>
                      Email
                  </td>
                  <td>
                      Active
                  </td>
              </tr>
          </thead>
          <tbody>
              {users.map(user=>(
              <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.isActive? "Active" : "Inactive"}</td>
              </tr>
              ))
              }
          </tbody>
  
      </table>
    );

}