<h1 align="center">Savior Client</h1>
<p align="center">
  <img width="300" src="docs/logo.png" alt="logo">
</p>


### How to commit 
```text
build: Build related changes (eg: npm related/ adding external dependencies)
chore: A code change that external user won't see (eg: change to .gitignore file or .prettierrc file)
feat: A new feature
fix: A bug fix
docs: Documentation related changes
refactor: A code that neither fix bug nor adds a feature. (eg: You can use this when there is semantic changes like renaming a variable/ function name)
perf: A code that improves performance
style: A code that is related to styling
test: Adding new test or making changes to existing test
```


# Getting started
## Install project
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Set the environment variables
```
cp .env.example .env

# open .env and modify the environment variables (if needed)
```
- Build and run the project
```
npm start
```
Navigate to `https://localhost:3004`