# @react-pdf memory leak example

Adding a break on the text element at:

```
src/pdf-generator/src/pdf-template.tsx:52
```

causes an infinite loop when rendering the PDF document with `@react-pdf/renderer`.
This even causes a memory leak crash when the pdf is large enough.
