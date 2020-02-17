# Author Gokulakannan
# Date: 22-05-2018
# . ~/go_back.sh 3
# . filename no-of-directory-to-back

COUNT=$1;

DOTDOT='../'

TOTAL=''

if [ -n "$COUNT" ]; then
    for ((number=0;number < $COUNT;number++))
    {
        TOTAL+=${DOTDOT}
    }
else
    TOTAL='..'
fi

cd $TOTAL
