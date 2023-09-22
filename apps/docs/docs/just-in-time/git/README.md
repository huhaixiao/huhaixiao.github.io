# git

- [git scm reference](https://git-scm.com/docs)
- Untracked files
- Working area
- Staging area
- Local repo
- Remote repo
- directed acyclic graph DAG 有向无环图
- tree hash
- commit hash
- parent hash
- gitHub/CODEOWNERS
- git-lfs Git Large File Storage
- git lfs install
- brew install git-lfs
- SSH keys
- Personal Access Token 
  - 临时token取代密码
  - 可以设置token的权限

## Internals

- working directory, index / staging area, repository
- object
  - blob: contents of a file
  - tree: a directory listing (of blobs and trees)
  - commit: a snapshot of the working tree
    - commit-hash
    - tree-hash
    - parent-hash
    - author
    - message

```
.git/
|__ HEAD      # ref: refs/heads/master
|__ objects/  # tree-hash blob-hash commit-hash
|__ refs/     # system for naming objects
  |__ heads/
|__ index
```

```shell
# macOS
echo ref: refs/heads/master > .git/HEAD
# git hash-object --stdin -w # save into .git/objects/
echo hello world | git hash-object --stdin -w
# 将某个blob增加到 (index/staging area)
git update-index --add --cacheinfo 100644 <blob-hash> <file-name.file-extension>
# 为当前的blob 生成一个 tree-hash
git write-tree
# 生成一个 commit
git commit-tree <tree-hash> -m "commit message" -p <parent-commit>
# 将某一个 commit-hash 写入到 ref
echo <commit-hash> > .git/refs/heads/master
# 同上
git update-ref refs/heads/master <commit-hash>
```

```
# HEAD 指向 main
# main 指向 844b5412aff9b73478b634c719a8c49eed814eff
# origin/main 指向 844b5412aff9b73478b634c719a8c49eed814eff

commit 844b5412aff9b73478b634c719a8c49eed814eff (HEAD -> main, origin/main)
Author: Haixiao Hu <haixhu@icloud.com>
Date:   Thu Jun 29 22:27:13 2023 +0800

    setup
```

## TODO

```shell
git reflog

git rev-list --all --count --author=huhaixiao

# git submodule

git update-ref -d refs/remotes/origin/release

git pack-refs

cat .git/packed-refs
```

- github 网页版 merge 策略
  - Merge pull request
  - Squash and merge
  - Rebase and merge
