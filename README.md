# Review react knowledge

## JS snippets

### render jsx element to page index.html

```javascript
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
```

```javascript
import React from "react";
import ReactDOM from "react-dom";

function MyApp() {
	return (
		<ul>
			<li>l1</li>
			<li>l2</li>
			<li>l3</li>
		</ul>
	);
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
```
