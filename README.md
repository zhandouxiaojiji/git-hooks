# Installing Eslint pre-commit
+ Copy pre-commit to ./git/hooks and chmod 775 pre-commit.
+ Copy .eslintrc to your workspace.
+ Eslint will automatic check your modified js code before you run git commit.

# Installing Luacheck pre-commit
+ Copy pre-commit to ./git/hooks and chmod 775 pre-commit.
+ Copy .luacheckrc to your workspace.
+ Luacheck will automatic check your modified lua code before you run git commit.

# Disallow branches other than master to use merge
+ Copy merge/* to ./git/hooks
