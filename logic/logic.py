from random import choice

def closestToSeventeen(a, b):
    if min(abs(a-17), abs(b-17)) == abs(a-17):
        return a
    else:
        return b

options = ["A"] + list(range(2,12))

val1 = choice(options)
val2 = choice(options)
print(f"val1={val1}, val2={val2}")

if val1 == val2 == "A":
    total = 11
elif val1 == "A":
    total = closestToSeventeen(1+val2, 11+val2)
elif val2 == "A":
    total = closestToSeventeen(1+val1, 11+val1)
else:
    total = val1 + val2


print(f"total={total}")