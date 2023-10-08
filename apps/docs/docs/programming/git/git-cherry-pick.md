# git cherry-pick

- Apply the changes introduced by some existing commits.

```shell
git cherry-pick <commit>...
git cherry-pick -n <commit>...

# git revert
# Revert some existing commits
git revert <commit>...
git revert -n <commit>...

# git rebase
# Reapply commits on top of another base tip.
git rebase <target-commit>
git rebase --continue
git rebase --abort
git rebase HEAD~1 -i
```
