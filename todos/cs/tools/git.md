<!-- toc -->
- [CLI](#cli)
  - [git add](#git-add)
  - [git blame](#git-blame)
  - [git branch](#git-branch)
  - [git bisect](#git-bisect)
  - [git checkout](#git-checkout)
  - [git cherry-pick](#git-cherry-pick)
  - [git clean](#git-clean)
  - [git commit](#git-commit)
  - [git diff](#git-diff)
  - [git log](#git-log)
  - [git pull](#git-pull)
  - [git push](#git-push)
  - [git rebase](#git-rebase)
  - [git remote](#git-remote)
  - [git reset](#git-reset)
  - [git revert](#git-revert)
  - [git stash](#git-stash)
  - [git status](#git-status)
  - [git tag](#git-tag)
  - [Glossary](#glossary)
    - [object](#object)
    - [detached head](#detached-head)
    - [head](#head)
    - [HEAD](#head-1)
    - [index](#index)
    - [working tree](#working-tree)
- [under the hood](#under-the-hood)
  - [生命周期](#生命周期)
    - [四区](#四区)
    - [五状态](#五状态)
  - [Git as a database](#git-as-a-database)

# CLI

## git add

```
git add .
git add -u
git add <file>...
```

## git blame

- GitLens, 随时blame的vscode插件

```
git blame <file>
git blame <file> -L <line_number>
```

## git branch

```
git branch
git branch -v
git branch -r
git branch -a
git branch --merged
git branch --no-merged
git branch -d <branch>...
git branch -D <branch>...
git branch --contains <commit>
git branch --no-contains <commit>
git branch -m <old_branch> <new_branch>
git branch -M <old_branch> <new_branch>
git branch --unset-upstream
git branch --set-upstream-to=<remote>/<branch>
```

## git bisect

```
git bisect start <latter_bad_commit> <former_good_commit>
git bisect bad
git bisect good
git bisect reset
```

## git checkout

```
git checkout <branch>
git checkout -
git checkout -b <new_branch>
git checkout -B <new_branch>
git checkout -- <file>...
git checkout .
```

## git cherry-pick

```
git cherry-pick <commit>
git cherry-pick -n <commit>
```

## git clean

```
git clean -df
git clean -i
```

## git commit

```
git commit
git commit -n
git commit -m <message>
git commit -m <message> -n
git commit --amend
git commit --amend -n
```

## git diff

```
git diff <pre_commit> <next_commit>
git diff <pre_commit> <next_commit> --name-only
```

## git log

```
git log --author=<name>
git log --grep=<pattern>...
git log --grep=<pattern>... --all-match
```

## git pull

```
git pull --rebase --autostash
git pull origin <branch> --rebase --autostash
```

## git push

```
git push origin HEAD
git push origin HEAD -f
# 删除远程分支
git push -d <remote> <branch>
```

## git rebase
> Reapply commits on top of another base tip
```
git rebase <branch>
git rebase -i <branch>
```

## git remote

```
git remote
git remote add <remote-name> <url>
```

## git reset
> Reset current HEAD to specific state
```
git reset --soft HEAD~1
git reset --hard <commit>
```

## git revert
> Revert some existing commits
```
git revert <commit>
git revert -n <commit>
```

## git stash
> Stash the changes in a dirty working directory away
```
git stash
git stash list
git stash apply
git stash clear
git stash drop stash@{num}
git stash show stash@{num}
git stash show stash@{num} -p
```

## git status
>
```
git status
```

## git tag
> Create, list, delete or verify a tag object signed with GPG
```
git tag
git tag <tag_name>
git tag -d <tag_name>
```

## Glossary

### object
> The unit of storage in Git. It is uniquely identified by the `SHA-1` of its contents. Consequently, an object cannot be changed.

### detached head
> checkout an arbitrary commit that isn't necessarily the tip of any branch.

### head
> named reference to the commit at the tip of a branch. Stored in `$GIT_DIR/refs/heads`

### HEAD
> current branch

### index
> is a stored version of working tree.

### working tree
> The tree of actual checked out files. HEAD commit's tree, plus any local changes.

# under the hood
> https://medium.com/@henrmota83/understanding-git-under-the-hood-b05b1dd52dec

## 生命周期

### 四区

1. 工作区(Working Area)
2. 暂存区(Stage)
3. 本地仓库(Local Repository)
4. 远程仓库(Remote Repository)

### 五状态

1. 未修改(Origin)
2. 已修改(Modified)
3. 已暂存(Staged)
4. 已提交(Committed)
5. 已推送(Pushed)

## Git as a database
> `.git` folder the real repo

```
> echo "Hello world A" > A
> git add A
> git commit -m "Add file A"
> echo "Hello world B" > B
> git add B
> git commit -m "Add file B"
> echo "One more line for A" >> A
> git add A
> git commit -m "Add file A"
> echo "One more line for B" >> B 
> git add B
> git commit -m "Add file B"
```
