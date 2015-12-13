##Adding a tempate

 1. Add the project name and directory to the templates.json file
 2. Create the project directory inside the template directory
 3. Add project files/directories to the template directory

##Customizing projects
 * Paths can reference their associated project name with `$1`
 * Files can reference their associated project name with `__$1`

Example project (simple text file)
 * JSON file entry: `"txt|text-file": "text-file"`
 * Path: `templates/text-file/$1.txt`
 * File contents: `project name: __$1`

Using the above configuration, the following will occur
```shell
template txt sample1
# a file named sample1.txt will be created
# its contents will be: project name: sample1

template text-file sample2
# this does the same thing
```
