Unification on terms in first-order logic.

This package provides a stand-alone unification function, but it is recommended to instead use the version in the `clause-normal-form` package which provides a more compact and efficient representation of terms:

https://github.com/russellw/clause-normal-form

https://www.npmjs.com/package/clause-normal-form

API:

```
m = unify(a, b)
```

Tries to unify two terms; on success, returns a Map of substitutions; on failure, returns null.

```
occurs(a, b, m)
```

Checks whether one term occurs in another, according to a Map of substitutions.
