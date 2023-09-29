<!-- toc -->
- [command mode](#command-mode)
- [navigation](#navigation)
- [deletion](#deletion)
- [Command mode](#command-mode-1)
- [Visual mode](#visual-mode)
- [Insert mode](#insert-mode)

# command mode
```
h //left
j // down
k // up
l // right
b // prev word
w // next word
0 // line start
^ // line start
$ // line end
:number // goto <line_number>
gg // top
G // bottom
zz // 

?<key_word> // find pre <key_word>
/<key_word> // find next <key_word>
n // next found <key_word>

f<character> // find <character> in line
; // next found <character> in line
```

# navigation
```
// [number_prefix]
h // left
j // down
k // up
l // right
{ // prev code block
} // next code block
w // next word
b // prev word

^ // line first word
$ // line end word
% // toggle bracket
* // goto next same word

cw // change word
dw // delete word
d% // delete bracket
D // delete rest of the line
C // delete rest of the line and enter into insert mode
dt<character> // delete rest of the line to <character>
ct<character> // delete rest of the line to <character> and enter into insert mode
r<character> // replace character
[number] ~ // swap character case


G // bottom
gg // top
zz // make screen in the middle
. // replay last command

:number // goto <number_line>
:set nu // show line number
?<key_word> // 向上搜索
/<key_word> // 向下搜索
```

# deletion
```
[number] dd // delete line
d [number] <navigation> // delete number of navigation
```

# Command mode

```
vim <file>

esc // --COMMAND-- mode

[number] x // delete character
[number] dd // delete line
d [number] h // left
d [number] j // down
d [number] k // up
d [number] l // right
d [number] { // prev code block
d [number] } // next code block

yy // copy line
p // paste line
u // undo
⌃ + r // redo

:w // write
:q // quite
:wq // write & quit
:q! // quit force
```

# Visual mode

```
V // VISUAL mode
d // delete selection

```

# Insert mode

```
i // insert before
a // insert after
A // insert at end of the line
I // insert at the beginning of the line

O // --INSERT-- mode new line above
o // --INSERT-- mode new line next
```