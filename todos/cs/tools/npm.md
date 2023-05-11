- https://docs.npmjs.com/

# npm CLI

## npm link

```shell
cd ~/projects/node-redis    # go into the package directory
npm link                    # creates global link
cd ~/projects/node-bloggy   # go into some other package directory.
npm link redis              # link-install the package
```

# scope
```
@somescope/somepackagename
```

# .npmrc
```
# comment
registry=https://registry.npm.org
registry=https://registry.npm.taobao.org
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
@aixuexi:registry=http://npm.aixuexi.com/
```