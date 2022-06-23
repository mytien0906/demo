const users = ["user1", "user2", "user3"];
function getUsers(req, res) {
  res.render("user", { users });
}
function getUser(req, res) {
  const id = req.params.id;
  res.render("userDetail", { id });
}
function createUser(req, res) {
  users.push(req.body.id);
  res.send(`<h1>Create user done!</h1>`);
}
function updateUser(req, res) {
  res.send(`<h1>Update user done!</h1>`);
}
function deleteUser(req, res) {
  res.send(`<h1>Delete user done!</h1>`);
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
