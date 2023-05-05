# Tailwind CSS

- https://tailwindcss.com/

## Prefix is added to utility classes only

```html
<!-- 有前缀的时候，pseudo不需要前缀 -->
<a class="first:tw-mt-[70px] tw-box-border"></a>
```

## Resolving ambiguities

```html
<!-- Will generate a font-size utility -->
<a class="text-[length:var(--my-var)]"></a>

<!-- Will generate a color utility -->
<a class="text-[color:var(--my-var)]"></a>
```

## rgba Background Color

```html
<!-- rgb内不能有空格 -->
<div class="bg-[rgb(0,0,0)]/10"></div>
<div class="bg-sky-500/100"></div>
<div class="bg-sky-500/[.06]"></div>
```

## Typography

- List Style Position
- List Style Type

```html
<ul class="tw-list-outside tw-list-disc tw-ml-4">
</ul>
```

## Layout

- Aspect Ratio
- Container
