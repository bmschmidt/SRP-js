# Stable Random Projection in Javascript

This is a javascript library to perform SRP locality-sensitive hashing in browser-based situations.

The results may differ from the python version in some parts of the Unicode character space because
of tokenization or lowercasing rules. The python version should be considered the reference implementation.
In practice, the two versions seem to be close enough that models trained on python versions run
well on Javascript versions.

The python library is much more highly optimized than the JS one.

# Use

It exposes a single function, `SRP`, that instantiates an object used for hashing.

## Creation:

Create an object which is used to hash further strings.

Object orientation is used, rather than functions, in order to build up a cache that
allows faster operation.

```js
hasher = SRP(640)
```

Running a hash of a string

```js
hasher.SRP("foo bar")
```

Running a hash from word counts is also possible. The words will be
re-tokenized to ensure they work with the SRP tokenization definition.
The following command is equivalent to the one above.

```js
hasher.SRP(["foo", "bar"], [1, 1])
```

## Tokenization

If for some reason you need the tokenization the SRP creates, you can extract it as
an ordered list.

```js
hasher.tokenize("foo bar")
```

## Options

Poke around the code and you'll see the option to change some things
including the log count settings. I don't recommend doing this.
