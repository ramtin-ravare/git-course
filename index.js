/*
--> git installation commands <--
git --version => show git current version;
git help => show all git commands;
git help "command name" => open a guide for this command;
git config --global ... => setting some global configs;
git config --list => show all current configs;

--> git in projects <--
touch <<file name>>.<<file format>> (exam: index.js) => creating new file in curr directory;
ls => show all files in current directory
git ls-files => show all files in current directory
git init => first git initialization for project;
git status => show project current changes and current status;
git add <<file name>> => for track a new file or staged new changes in a previous tracked file;
git restore --stage <<file name>> => to unstage a file;
git add . => git will track changes in all files;
git commit -m "any description to save current changes and stage" => save all staged changes and empty staged changes;
git log => show all commits;
git diff => show all unstaged changes;
git rm <<name file1>> <<name file2>> ... => remove commited files from directory;
git rm -r <<directory name>> ...=> remove directory form directory;

git remote add <<repository name for access in future>> <<repository link>>
git push <<repository name>> => send codes and changes to a remote repository;
git pull => receive all codes and changes from a remote repository;

*/
/*
--> git conventions <--
U file marker => untracked file
A file marker => added file, a new file that begin to track by git
M file marker => modified file
stage => all changes those didn't commit yet
commit => save all staged changes and empty the stage
*/