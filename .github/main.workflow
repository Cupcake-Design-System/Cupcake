workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "Build" {
  uses = "actions/npm@master"
  args = "install"
}

action "GitHub Action for npm" {
  uses = "actions/npm@master"
  args = "test"
}
