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
git branch -M main => define a branch for our workspace
git push <<repository name>> <<branch name>> => send codes and changes to a remote repository;
git pull => receive all codes and changes from a remote repository;
git push <<repo name>> --delete <<branch name>> || git push <<repo name>> :<<branch name>> => delete a branch from remote repositroy
git branch -D <<branch name>> => delete branch from git flow

clip < <<file name>> => make a copy from content of this file in the clipboard;
cd ~/<<folder name>> => enter to the directory whithout know the full directory path;
*.txt => this format use in .gitignore to ignore all .txt files;


--> SSH configuration commands <--
1. set a SSH key
2. switch to ssh directory: cd ~/.ssh
3. adding SSH key to ssh-agent and save it
4. adding the ssh to github:
    --> clip < id_rsa.pub
    -- github > settings > SSH and GPG keys > new SSH Key
    -- setting title and paste the key in key section and add the SSH
5. SSH set on our github account and now we can send our project with SSH with all the previous commands

--> Branchs <--
git clone <<repository link>> => make a copy from repository to local computer;
git branch => show all branches;
git branch <<name new branch>> => make a new branch;
git checkout <<branch name>> => enter in this branch;
git checkout -b <<branch name>> => make a new branch and switch to this branch;
git pull <<repo name>> <<branch name>> => this merge the current branch to pull branch;

tips:
    -- in most scenario we should first switch to master branch and then make a new branch
    -- when we clone a repo, the repo name reset and set to the "origin"

--> git conflicts <--
1. first enter to branch with conflict
2. pull main branch
3. resolve the conflict
4. stage and commit the conflict resolve
5. then we can pull main without problem

*/
/*
--> git conventions <--
U file marker => untracked file
A file marker => added file, a new file that begin to track by git
M file marker => modified file
stage => all changes those didn't commit yet
commit => save all staged changes and empty the stage
ssh => safer and faster protocol than https
*/