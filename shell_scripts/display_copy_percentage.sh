#!/bin/bash
#Author: Gokulakannan T
#File: directory_strcture

rsync -ah --info=progress2

# Usage:

# Set a alias for the rsync command. It will be easy to use.
# For example: Put the below command in ~/.bash_aliases file
# alias cpv='rsync -ah --info=progress2'
# Then, execute (source ~/.bash_aliases) command to apply the alias command to run on the current instance of terminal
# That's it. 
# cpv -r ./large_source_folder ../destination_folder
# Output: 1.42G  35%  212.14MB/s    0:00:06 (xfr#436, to-chk=715/1174)
