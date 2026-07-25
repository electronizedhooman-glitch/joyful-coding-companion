## Problem

The dev server is failing with a JSX parse error at `src/routes/index.tsx:45`. The opening `<a` tag for the "Connect" nav button is missing — line 42 is blank where `<a` should be, leaving orphan attributes `href="#contact"` and `className="..."` followed by `>`.

This is the same corruption pattern as before (likely another GitHub-side edit stripped the tag opener).

## Fix

Restore the opening `<a` tag on line 42 of `src/routes/index.tsx`:

```tsx
<a
  href="#contact"
  className="bg-old-rose text-white px-6 py-2 rounded-full ..."
>
  Connect
</a>
```

Then verify the preview recovers (flush HMR, check dev server logs are clean).

No other changes.