- [pnpm](https://pnpm.io/)

|       Command       |          Meaning          |
| :-----------------: | :-----------------------: |
|  `pnpm add <pkg>`   |  Save to `dependencies`   |
| `pnpm add -D <pkg>` | Save to `devDependencies` |
| `pnpm add -g <pkg>` | Install package globally  |

```shell
pnpm install
pnpm <cmd>
pnpm config set store-dir /path/to/.pnpm-store
pnpm config list
pnpm --filter <workspace-name> <cmd>
pnpm --filter <workspace-name> add <pkg>
pnpm -r --filter=./packages/* run build
```
