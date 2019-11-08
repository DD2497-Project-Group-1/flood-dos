i=0
while [ $i -lt $3 ]
do
    curl $1:$2 &
    i=$(($i + 1))
done