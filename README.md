# Lessons short notes

1. React is a JavaScript library, but in this lesson we are using TypeScript (TS) and learning it step by step.

2. We created our project using React + Vite + TypeScript.

3. We used Prettier to automatically format our code and make it cleaner and more readable.

4. We used Bootstrap to build ready-made components; we used the List Group component by copying Bootstrap’s snippet.

5. Fragments: React cannot return multiple elements directly, so all elements must be wrapped inside one parent element.
Wrong:
```

   return (
     <h1>Heading</h1>
     <ul><li>Item</li></ul>
   );
```
Right:
```
   return (
       <>
          <h1>Heading</h1>
          <ul><li>Item</li></ul>
       <>
   );
```
   Solution 1 : Wrap everything inside a <div>.
   Solution 2 :Import {Fragments}, Wrap everything inside a <Fragments>.
   Solution 3(BEST) : Wrap everything inside a <>(empty).

   Solution 2: Import Fragment from React and use <Fragment>...</Fragment>.

   Solution 3: Use empty tags <>...</> as shorthand for Fragment without importing it.
