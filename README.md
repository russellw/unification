Unification on terms in first-order logic.

API:

```
m = unify(a, b)
```

Tries to unify two terms; on success, returns a Map of substitutions; on failure, returns null.

```
occurs(a, b, m)
```

Checks whether one term occurs in another, according to a Map of substitutions.
