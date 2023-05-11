function allAccess(req: any, res: any) {
  res.status(200).send("Public Content.");
}

function userBoard(req: any, res: any) {
  res.status(200).send("User Content.");
}
function adminBoard(req: any, res: any) {
  res.status(200).send("Admin Content.");
}

function moderatorBoard(req: any, res: any) {
  res.status(200).send("Moderator Content.");
}

export default {
  allAccess,
  userBoard,
  adminBoard,
  moderatorBoard,
};
