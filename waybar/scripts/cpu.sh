#! /bin/bash
cpu=$(top -bn1 | grep "Cpu(s)" | awk '{print int(100 - $8) "%"}')
echo " $cpu"
