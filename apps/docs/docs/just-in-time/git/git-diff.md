# git diff

```shell
git diff # 相当于 git diff <暂存区> <工作区>
git diff --cached # 相当于 git diff HEAD <暂存区>
git diff --staged # git diff HEAD staged
git diff HEAD # 相当于 git diff HEAD <工作区>
git diff HEAD~1 HEAD~0
git diff HEAD~1 HEAD~0 --stat
git diff <former-commit> <latter-commit> -- <file-path>
git diff --shortstat
git diff --name-only
```
