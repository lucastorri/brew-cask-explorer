# brew-cask-explorer

I'm learning how to use [node-wekbit](https://github.com/rogerwang/node-webkit). This project is my first attempt. It is an app that display packages available in [homebrew-cask](https://github.com/caskroom/homebrew-cask) and once one is selected, goes to the their webpage. The idea is to be able to explore cool packages that I don't know about.

`homebrew` and `homebrew-cask` must be installed on your Mac OS box.

It's buggy… very, very buggy :)

![Image](docs/screenshot.png?raw=true)


## Running

```
$path_to/node-webkit $project_dir
```
or 

```
cd $project_dir
zip -r app.nw * && $path_to/node-webkit app.nw
```