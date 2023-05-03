# git

- [git scm reference](https://git-scm.com/docs)
- Untracked files
- Working area
- Staging area
- Local repo
- Remote repo

```shell
# 获取commit id
git rev-parse --short HEAD～8
```

## git bisect

```shell
git bisect start <latter-bad-commit> <former-good-commit>
git bisect start HEAD~0 HEAD~128
git bisect good
git bisect bad
git bisect reset
```

## git cherry-pick

- Apply the changes introduced by some existing commits.

```shell
git cherry-pick <commit>...
git cherry-pick -n <commit>...
```

## todo



- 三大分区
  - 工作区(working tree) add
  - 暂存区(stage) commit
  - 版本区(commit)
- working tree
- git commit tree 本质是 DAG
- directed acyclic graph DAG 有向无环图
- HEAD
  - The current branch.
  - HEAD is a reference to one of the heads in your repository.
  - except when using a detached HEAD.

```shell
cat .git/HEAD
cat .git/COMMIT_EDITMSG
git <command> -h
git help <command>
git cat-file -p <commit>

git init
git remote -v
git add .
git add -u
git add <path>
git blame <file>
git blame <file> -L <line_number>

# git checkout
git checkout <branch_name>
git checkout -
git checkout -b <branch_name>
git checkout -- <path>
git checkout .

# git show
git show <commit> --stat

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

# git log
git log
    --perl-regexp
    --grep='^Revert'
    --author='Zusheng Ma|Haixiao Hu'
    --before=2023-01-01
    --after=2022-12-26
    --reverse
    --shortstat
    -g
git log <commit>
    --first-parent
    --graph

# git commit
git commit
git commit -m
git commit --amend
git commit --amend --date="$(date -R)"

# git switch
git switch <branch_name>
git switch -

# git branch
git branch
git branch -r
git branch -a
git branch --merged
git branch -d <branch_name>...
git branch -D <branch_name>...

# git tag
git tag -d <tag-name> # 删除remote tag step1
git push origin :refs/tags/<tag-name> # 删除remote tag step2

# git diff
git diff # 相当于 git diff <暂存区> <工作区>
git diff --cached # 相当于 git diff HEAD <暂存区>
git diff HEAD # 相当于 git diff HEAD <工作区>
git diff HEAD~1 HEAD~0
git diff HEAD~1 HEAD~0 --stat
git diff <former-commit> <latter-commit> -- <file-path>

# git restore
# Restore working tree files
git restore --staged <file-path>
git restore --worktree <file-path>

git config pull.ff only
git pull --ff-only
git pull --rebase --autostash
git push origin HEAD
git reflog
git reset --soft HEAD~1
git rev-list --all --count --author=huhaixiao

# git subtree
git subtree add --prefix {local dir} {repo URL} {remote branch} --squash
git subtree pull --prefix {local dir} {repo URL} {remote branch} --squash

# git submodule

git update-ref -d refs/remotes/origin/release

git pack-refs

cat .git/packed-refs
```

git Source code management

- `git log -<number> --grep=<pattern> --no-merges --author='Haixiao Hu'`
- `git branch -vv` 查看branch track的remote
- `git pull --rebase --autostash`
- `git remote -v`
- `git push origin HEAD -f`
- `git push -d <repository> <refspec>`
- `git branch --edit-description`
- `git config branch.<name>.description`
- `git config user.name`
- `git config user.email`
- github 网页版 merge 策略
  - Merge pull request
  - Squash and merge
  - Rebase and merge