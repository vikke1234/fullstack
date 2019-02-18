const initialAccounts = [
  {
    username: "test1",
    name: "test",
    password: "abcd"
  },
  {
    username: "test2",
    name: "test",
    password: "abcde"
  }
]

const invalidAccount = {
  username: "test3",
  name: "invalid",
  password: "a"
}

const validAccount = {
  username: "valid",
  name: "invalid",
  password: "asdfg"
}

module.exports = {
  initialAccounts,
  invalidAccount,
  validAccount
}
