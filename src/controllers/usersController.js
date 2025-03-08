exports.getUsers = (req, res) => {
  res.send('Get users route');
}

exports.createUser = (req, res) => {
  res.send('Post user route');
}

exports.getUserById = (req, res) => {
  res.send ('Get user by Id route: {userId}');
}

exports.putUserById = (req, res) => {
  res.send('Put user by Id route: {userId}');
}

exports.deleteUserById = (req, res) => {
  res.send('Delete user by Id route: {userId}');  
}
