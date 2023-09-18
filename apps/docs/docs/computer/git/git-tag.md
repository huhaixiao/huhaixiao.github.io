# git tag

- tag name and branch name will never be same.

```shell
git tag
git tag <tag-name> -f -m "tag-message"
git tag <tag-name> <commit-id>
git tag -d <tag-name>
# reedit tag message
git tag <tag-name> <tag-name>^{} -f -m "<new-message>"

git show <tag-name>
git push origin <tag-name>
git push origin --tags

# steps to delete a remote tag
git tag -d <tag-name> # 删除remote tag step1
git push origin :refs/tags/<tag-name> # 删除remote tag step2
```
