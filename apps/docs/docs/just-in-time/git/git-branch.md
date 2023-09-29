# git branch

```shell
git branch --set-upstream-to=origin/remote-branch-name local-branch-name
# git delete branches match pattern
git branch | grep "branch-name regexp" | xargs git branch -D
# git delete branch except match pattern
git branch | grep -v "branch-name regexp" | xargs git branch -D

git branch
git branch -r
git branch -a
git branch -vv # 查看branch track的remote
git branch --edit-description
git branch --merged
git branch -d <branch_name>...
git branch -D <branch_name>...
git branch --merged
git branch --no-merged
git branch --contains <commit>
git branch --no-contains <commit>
git branch -m <old_branch> <new_branch>
git branch -M <old_branch> <new_branch>
git branch --unset-upstream
git branch --set-upstream-to=<remote>/<branch>
```
