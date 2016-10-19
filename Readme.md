## NPM Help
```
npm help install
npm help-search remove
npm apihelp prune
```

## Setting Defaults
```
npm set init-author-name "Phu Phan"
npm set init-author-email "phudev95@gmail.com"
npm set init-license "MIT"
```

### Get config:
```
npm get init-author-name
npm get init-author-email
npm get init-license
```

# Install package
## For Developer
```
npm install angular --save-dev
npm install angular -D
npm i angular -D

```

## For Production
```
npm install angular --save
npm install angular -S
npm i angular -S
```

# Installing global packages
```
npm i global <package-name>
npm list -g --depth 0 (Show all global packages installed)
```

## Removing a package
```
npm uninstall <package-name> --save
npm uninstall <package-name> --save-dev
```

# Listing installed package
## Local
```
npm list (All dependencies)
npm list --depth 0 (All package with tree of Level 0)
npm list --depth 0 --dev true (All package with tree of Level 0 and it in group Dev)
npm list --depth 0 --long true (All package with tree of Level 0 and more info for each packages)
npm list --depth 0 --json true (Save behave, but it will return Json type)
npm list --parseable true (All packages, and show full path fol all)
```

## Global
```
    
	npm list --global true (All dependencies)
	npm list --global true --depth 0 (All global package with tree of Level 0)
	npm list --global true --depth 0 --json true
```

## Installing specific versions
```
npm i underscore@1.8.3
npm i underscore@1.8.x
npm i underscore@1.8
npm i underscore@1.7
npm i underscore@1.x
npm i underscore@1
npm i underscore@">=1.1.0 <1.4.0"
npm i underscore@1.8.2 --save --save-exact (--save-exact: Remove @ before version in package)
```

# Advanced NPM
## Installing from a Git Repo
```
npm install express
npm install https://github.com/strongloop/express
```

## Installing from a Gist
`Ex: https://gist.github.com/aba9ac1b45bb63425348fbc122833e4b.git`
```
npm i gist:aba9ac1b45bb63425348fbc122833e4b
```

## Installing from a Folder
```
npm i ../hello-world --save
```

## Searching for Packages
Go to website [https://www.npmjs.com/search?q=underscore](https://www.npmjs.com/search?q=underscore) to searching packages
<br>or you can using command: 
```
npm search underscore
```

## Reference
- **_[https://docs.npmjs.com/misc/config](https://docs.npmjs.com/misc/config)_**
