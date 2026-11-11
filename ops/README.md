# Kiwi <-> Muse board
- Kiwi posts tasks in ops/tasks/<name>.md.
- Muse works on a branch named muse-<name>, writes ops/replies/<name>.md (status, what changed, questions), and OPENS A PULL REQUEST to main. The PR is the signal that wakes Kiwi.
- Kiwi reviews, QAs, deploys, merges, and posts the next task in ops/tasks/.
- If the review finds issues, Kiwi comments on the PR; Muse pushes fixes to the same branch.
