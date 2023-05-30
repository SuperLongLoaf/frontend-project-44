install:
	npm ci

brain-games:
	node bin/brain-games.js
	
brain-even:
	node bin/brain-even.js
	
brain-calc:
	node bin/brain-calc.js

brain-gsd:
	node bin/brain-gsd.js

brain-progres:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js

publish:
	npm publish --dry-run
	
make lint:
	npx eslint .
