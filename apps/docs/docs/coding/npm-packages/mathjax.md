# Glossary

- jax - MathJax's input and output processors as called "jax"

# MathJax Processing Model

- page preprocessors
- input processors
- output processors
- The page author configues MathJax by indicating which input and output jax are to be used.

# How mathematics is stored in the page

> `<script>` tags

# Synchronizing Ur code with MathJax

# Text & LaTex Input

## 块级 delimiter
```
$$...$$
\[...\]
```

## 行内 delimiter
```
\(...\)
$...$
```

`$...$`不推荐, 默认不使用

```javascript
MathJax.Hub.Config({
  tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
});
```

```
git remote show origin

```