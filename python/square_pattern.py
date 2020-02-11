# Print string as a squere format.
# python3 square_pattern.py

st = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
for i, v in enumerate(st):
        print((i+1)*(v+' '), '<', '--' * (len(st)-i), '> : ',(i+1))
