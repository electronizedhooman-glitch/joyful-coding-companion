## Problem

Preview crashes with:
```
SyntaxError: Expected corresponding JSX closing tag for <nav>. (47:12)
```

In `src/routes/index.tsx` around lines 42–47, the opening `<a` tag of the "Connect" nav link was deleted (likely during the GitHub edit). What remains is orphan JSX attributes with no element:

```tsx
</a>

  href="#contact"
  className="bg-old-rose text-white px-6 py-2 rounded-full ..."
>
  Connect
</a>
```

The parser sees the closing `</a>` but no matching opener, so the whole route file fails to transform. Because `routeTree.gen.ts` imports every route, the SSR entry then throws on every request → the "preview not starting" 500.

## Fix

Restore the missing `<a` opener on line 42 so the block reads:

```tsx
<a
  href="#contact"
  className="bg-old-rose text-white px-6 py-2 rounded-full font-sans-label text-sm tracking-widest font-semibold hover:bg-old-rose/90 hover:scale-105 active:scale-95 transition-all shadow-sm"
>
  Connect
</a>
```

No other changes.

## Verify

- Wait for Vite to re-transform `src/routes/index.tsx` — the transform error should disappear.
- Reload the preview and confirm the page renders with the Connect button in the nav.
