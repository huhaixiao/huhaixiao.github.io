# git log
 
```shell
git log
    -<number>
    --perl-regexp
    --grep='^Revert'
    --grep=<pattern>
    --author='author|Haixiao Hu'
    --before=2023-01-01
    --after=2022-12-26
    --reverse
    --shortstat
    --no-merges
    -g
    --first-parent
    --graph
    --all-match
    
# log reflog
git log -g
# git log invert grep
git log -P --grep="regexp" --invert-grep

# git log format
git log --format=format:"%Cred%H%Creset%n%B"

# tree hash
git log --format=format:"%T"

# compute file blob hash
git hash-object <file-path>

# 相当于 git cat-file -p
git log --format=raw

# 相当于 git show
git log --patch --unified=0

git blame <file>
git blame <file> -L <line_number>

git show <commit> --stat
```
