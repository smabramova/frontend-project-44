install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node games/brain-even.js

brain-calc:
	node games/brain-calc.js

brain-gcd:
	node games/brain-gcd.js

brain-progression:
	node games/brain-progression.js

brain-prime:
	node games/brain-prime.js

lint:
	npx eslint .

lint-fix:
    npx eslint . --fix

publish:
	npm publish --dry-run
	