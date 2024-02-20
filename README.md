# React + Vite

## QUESTIONS DE COURS

1. Quel composant vu en cours permet la gestion des routes avec React ?

Le composant permettant la gestion des routes avec React est ``<BrowserRouter>`` de react-router-dom.
Un exemple d'implémentation : 

```jsx
<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    </>
```

2. Quel hook permet de récupérer un paramètre passé dans l’url ?

Le hook permettant de récupérer un paramètre passé dans l’url est ``useParams()``.

3. Qu’est-ce qu’un fragment ?

Un fragment est une sorte de balise propre à React permettant de regrouper le code JSX/HTML de plusieurs balises en un seul container. Son code est ``<>*Notre code*</>`` ou ``<React.Fragment>*Notre code*</React.Fragment>``.

4. Quel hook permet de déclencher une action à un moment précis du cycle de vie du composant ?

Le hook permettant de déclencher une action à un moment précis du cycle de vie du composant est ``useEffect()`` en passant en deuxième paramère du hook un tableau vide.

5. React manipule-t-il directement le DOM de l’application ? expliquez…

React ne manipule pas directement le DOM de l'application. Il manipule un DOM virtuel qui est une copie du DOM réel. Lorsqu'un changement est effectué sur le DOM virtuel, React compare le DOM virtuel avec le DOM réel et met à jour le DOM réel uniquement si une différence est détectée.

## QUESTIONS PRATIQUES 

1. Vous mettez en place un routeur sur votre projet react, écrivez la route qui permet de lancer le composant Post en
lui transmettant le slug du post à afficher en paramètre

```jsx
<Route path="/post/:slug" component={Post} />
```

2. Vous utilisez useReducer dans votre projet. Dans le code JSX, quel code permet d’afficher un bouton qui, lorsque
l’on clique dessus, lance l’action « SET_ITEM »

```jsx
<button onClick={() => dispatch({ type: 'SET_ITEM' })}>Lance l'action set item</button>
```

3. Votre composant nécessite un state isAdmin. Ecrivez la ligne qui permet de le créer et de lui affecter la valeur
« false » par dafaut.

```jsx
const [isAdmin, setIsAdmin] = useState(false);
```

4. En JSX, une div affiche le texte du state « message », elle possède du style inline déterminant sa couleur de police à
rouge.

```jsx
<div style={{ color: 'red' }}>{message}</div>
```

5. En JSX, créez un input qui est rattaché au state « ville » et qui stockera ce que saisit l’utilisateur dans le state.

```jsx
<input type="text" value={ville} onChange={(e) => setVille(e.target.value)} />
```
